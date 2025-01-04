import SuperAdmin from '../models/superAdmin.model.js';
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';

//description: Authenticate a super admin / set token
//route: POST /api/superAdmin/auth
//access: Public
const authSuperAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const superAdmin = await SuperAdmin.findOne({ email });

    if (superAdmin && (await superAdmin.matchPassword(password))) {
        generateToken(res, superAdmin._id);
        res.status(201).json({
            _id: superAdmin._id,
            name: superAdmin.name,
            email: superAdmin.email,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})

//description: Register a super admin
//route: POST /api/superAdmin
//access: Public
const registerSuperAdmin = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const superAdminExists = await SuperAdmin.findOne({ email });
    if (superAdminExists) {
        res.status(400);
        throw new Error('Super Admin already exists');
    }

    const superAdmin = await SuperAdmin.create({
        name,
        email,
        password
    });

    if (superAdmin) {
        generateToken(res, superAdmin._id); 
        res.status(201).json({
            _id: superAdmin._id,
            name: superAdmin.name,
            email: superAdmin.email,
        });
    } else {
        res.status(400);
        throw new Error('Invalid super admin data');
    }
})

//description: Logout a super admin
//route: POST /api/superAdmin/logout
//access: Public
const logoutSuperAdmin = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: 'Super Admin logged out' });
})

//description: Get super admin profile
//route: GET /api/superAdmin/profile
//access: Private
const getSuperAdminProfile = asyncHandler(async (req, res) => {
    const superAdmin = {
        _id: req.superAdmin._id,
        name: req.superAdmin.name,
        email: req.superAdmin.email,
    }
    res.status(200).json(superAdmin);
})

//description: Update super admin profile
//route: PUT /api/superAdmin/profile
//access: Private
const updateSuperAdminProfile = asyncHandler(async (req, res) => {
    const superAdmin = await SuperAdmin.findById(req.superAdmin._id);

    if (superAdmin) {
        superAdmin.name = req.body.name || superAdmin.name;
        superAdmin.email = req.body.email || superAdmin.email;

        if (req.body.password) {
            superAdmin.password = req.body.password;
        }

        const updatedSuperAdmin = await superAdmin.save();

        res.status(200).json({
            _id: updatedSuperAdmin._id,
            name: updatedSuperAdmin.name,
            email: updatedSuperAdmin.email,
        });
    } else {
        res.status(404);
        throw new Error('Super Admin not found');
    }
})

export {
    authSuperAdmin,
    registerSuperAdmin,
    logoutSuperAdmin,
    getSuperAdminProfile,
    updateSuperAdminProfile
} 