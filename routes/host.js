import express from "express";
import {joinTask, newTask , categoryFilter} from "../controllers/host.js"
import { isAuthenticated } from "../middleware/auth.js"

const router = express.Router();

router.post("/api_v1/host/create" , isAuthenticated , newTask );
router.get("/api_v1/host/join" , isAuthenticated , joinTask );
router.get("/api_v1/host/filter",isAuthenticated,categoryFilter);

export default router  