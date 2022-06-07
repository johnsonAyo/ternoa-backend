import express from "express";
import {
  deleteNft,
  updateNft,
  createNft,
  getAllNft,
  getNft,
} from "../controllers/nftController";

const router = express.Router();

router.route("/").get(getAllNft).post(createNft);
router.route("/:id").get(getNft).delete(deleteNft).patch(updateNft);

export default router;

