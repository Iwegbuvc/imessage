import express from "express";
import {
  getConversationsForSidebar,
  getMessages,
  getUsersForSidebar,
  sendMessages,
} from "../controller/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/users", getUsersForSidebar);
router.get("/conversation", getConversationsForSidebar);
router.get("/:id", getMessages);
router.get("/send/:id", upload.single("media"), sendMessages);

export default router;
