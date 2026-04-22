import mongoose from "mongoose";


const petReportSchema = new mongoose.Schema({
  reportType: {
    type: String,
    required: true,
  },
  petName: {
    type: String,
    required: true,
  },
  petPic: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  lastSeenTime: {
    type: Date,
    required: true,
  },
  lastSeenDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const PetReport = mongoose.model("PetReport", petReportSchema);

export default PetReport;
