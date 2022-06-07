import mongoose from "mongoose";

const nftSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "An nft must have a title"],
    message: "Input a nft name",
  },
  img: {
    type: String,
    required: [true, "AN nft must have an image"],
    message: "Input a nft name",
  },
  price: {
    type: String,
    required: [true, "AN nft must have a price"],
    message: "Input a nft name",
  },
  desc: {
    type: String,
    required: [true, "AN nft must have a desc"],
    message: "Input a nft description",
  },
});
const Nft = mongoose.model("Nft", nftSchema);

export default Nft;
