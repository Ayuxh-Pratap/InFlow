import jwt from "jsonwebtoken";

const generateToken = (res, superAdminId) => {
    const token = jwt.sign({ superAdminId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });
    return token;
}  

export default generateToken