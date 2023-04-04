import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  snippet: {
    title: String,
    description: String,
    thumbnails: {
      default: {
        url: String,
        width: Number,
        height: Number
      },
      medium: {
        url: String,
        width: Number,
        height: Number
      },
      high: {
        url: String,
        width: Number,
        height: Number
      }
    }
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Song = mongoose.model("Song", songSchema);

export default Song;
