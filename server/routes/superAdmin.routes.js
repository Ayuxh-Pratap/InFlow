import express from "express";
import { authSuperAdmin, getSuperAdminProfile, logoutSuperAdmin, registerSuperAdmin, updateSuperAdminProfile } from "../controllers/superAdmin.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/', registerSuperAdmin)
router.post('/auth', authSuperAdmin)
router.post('/logout', logoutSuperAdmin)
router.route('/profile').get(protect , getSuperAdminProfile).put(protect , updateSuperAdminProfile)

export default router;