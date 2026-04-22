import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
  
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
