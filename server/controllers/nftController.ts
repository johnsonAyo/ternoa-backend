import Nft from "../models/nftModel";
import catchAsync from "../utils/catchAsync";
import { NextFunction, Response } from "express";
import { CustomReq } from "../models/custom";

import { getAll, getOne, updateOne, deleteOne } from "./handlerFactory";

const updateNft = updateOne(Nft);
const deleteNft = deleteOne(Nft);
const getAllNft = getAll(Nft);
const getNft = getOne(Nft, "");

const createNft = catchAsync(
  async (req: CustomReq, res: Response, next: NextFunction) => {
    const { price, desc, title, img } = req.body;

    let createdNft = await Nft.create({
      price,
      desc,
      title,
      img,
    });
    res.status(201).json({
      status: "success",
      data: {
        data: createdNft,
      },
    });
  }
);

export { deleteNft, updateNft, createNft, getAllNft, getNft };
