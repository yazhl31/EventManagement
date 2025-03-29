import express from "express";
import { sendMessage } from '../controller/messageController.js';

const router = express.Router();

router.post("/send", sendMessage); // ✅ Correct path

export default router;
