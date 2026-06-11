import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile: { type: String, required: true }, //cloudnary url
    thumbnail: { type: String, required: true }, //cloudnary url
    title: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, required: true }, // in seconds 
    isPublished: { type: Boolean, default: false },
    views: { type: Number, default: 0 },
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
videoSchema.plugin(mongooseAggregatePaginate);
export default Video=mongoose.model("Video", videoSchema);

