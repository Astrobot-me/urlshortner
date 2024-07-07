import express from 'express';
import Link from '../models/link.js';
import { handleGetalllinks, handleGeneratelink, handleGetredirect } from '../controllers/link.js';


const router = express.Router()

router.route("/link").get(handleGetalllinks).post(handleGeneratelink)

router.route("/:id").get(handleGetredirect)

export default router;  