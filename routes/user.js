import express from "express";
import {register, login, getMyProfile ,logout} from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();


router.post("/api_v1/new", register);
router.post("/api_v1/login", login);
router.get("/api_v1/me",isAuthenticated,getMyProfile);
router.get("/api_v1/logout",isAuthenticated,logout);

export default router;

