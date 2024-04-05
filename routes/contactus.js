import express from "express"
import {saveIssue} from "../controllers/contactus.js"

const router = express.Router();

router.post("/api_v1/contactus" ,saveIssue)

export default router