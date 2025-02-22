import { Router } from "express";
import chatBotController from "../controllers/chatBotController.js";

const router = Router();

// router.post("/completions", chatBotController.fetchChatGPT);

router.post("/Gemini2.0Flash", chatBotController.fetchGeminiMsg);

export default router;
