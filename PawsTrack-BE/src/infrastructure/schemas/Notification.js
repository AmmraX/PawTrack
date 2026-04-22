import mongoose from "mongoose";


const NotificationSchema = new mongoose.Schema({

  Type: {
    type: String 
    },
  Content: {
    type: String 
    },
  DateTime: { 
    type: Date, default: Date.now 
    },
  User_ID: { 
    type: String,
    required: true 
   }
});

const Notification = mongoose.model("Notification", NotificationSchema);

export default Notification;
