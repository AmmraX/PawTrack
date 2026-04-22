import PetReport from "../infrastructure/schemas/PetReport.js";


const petReportSampleData = [
  {
    reportType: "Lost",
    petName: "Buddy",
    petPic: "https://example.com/images/buddy.jpg",
    type: "Dog",
    breed: "Golden Retriever",
    color: "Golden",
    lastSeenTime: new Date("2024-08-01T14:30:00Z"),
    lastSeenDate: new Date("2024-08-01"),
    description: "Friendly golden retriever, responds to 'Buddy'. Was wearing a red collar with tags. Last seen near Central Park around 2:30 PM."
  },
  {
    reportType: "Found",
    petName: "Unknown Cat",
    petPic: "https://example.com/images/stray-cat.jpg",
    type: "Cat",
    breed: "Domestic Shorthair",
    color: "Black",
    lastSeenTime: new Date("2024-08-02T08:15:00Z"),
    lastSeenDate: new Date("2024-08-02"),
    description: "Small black cat found wandering in downtown area. Very friendly and appears well-cared for. No collar or identification."
  },
  {
    reportType: "Lost",
    petName: "Whiskers",
    petPic: "https://example.com/images/whiskers.jpg",
    type: "Cat",
    breed: "Persian",
    color: "White",
    lastSeenTime: new Date("2024-07-30T22:00:00Z"),
    lastSeenDate: new Date("2024-07-30"),
    description: "White Persian cat with blue eyes. Very fluffy and distinctive appearance. Shy around strangers. Missing since July 30th evening."
  },
  {
    reportType: "Found",
    petName: "Unknown Dog",
    petPic: "https://example.com/images/found-dog.jpg",
    type: "Dog",
    breed: "Mixed Breed",
    color: "Gray",
    lastSeenTime: new Date("2024-08-03T16:45:00Z"),
    lastSeenDate: new Date("2024-08-03"),
    description: "Medium-sized gray mixed breed dog found near the shopping mall. Wearing a blue collar but no tags. Very energetic and friendly."
  },
  {
    reportType: "Lost",
    petName: "Charlie",
    petPic: "https://example.com/images/charlie.jpg",
    type: "Bird",
    breed: "Cockatiel",
    color: "Yellow and Gray",
    lastSeenTime: new Date("2024-08-01T10:00:00Z"),
    lastSeenDate: new Date("2024-08-01"),
    description: "Yellow and gray cockatiel named Charlie. Can say a few words including his name. Escaped from cage on August 1st morning."
  },
  {
    reportType: "Found",
    petName: "Unknown Rabbit",
    petPic: "https://example.com/images/rabbit.jpg",
    type: "Rabbit",
    breed: "Holland Lop",
    color: "Brown",
    lastSeenTime: new Date("2024-08-02T19:30:00Z"),
    lastSeenDate: new Date("2024-08-02"),
    description: "Small brown rabbit with floppy ears found in residential area. Appears to be a pet, very docile and used to human contact."
  },
  {
    reportType: "Lost",
    petName: "Max",
    petPic: "https://example.com/images/max.jpg",
    type: "Dog",
    breed: "German Shepherd",
    color: "Black and Tan",
    lastSeenTime: new Date("2024-07-31T18:20:00Z"),
    lastSeenDate: new Date("2024-07-31"),
    description: "Large German Shepherd, black and tan coloring. Very intelligent and well-trained. Responds to commands in German. Has a distinctive scar on left ear."
  },
  {
    reportType: "Found",
    petName: "Fluffy",
    petPic: "https://example.com/images/fluffy.jpg",
    type: "Cat",
    breed: "Maine Coon",
    color: "Orange",
    lastSeenTime: new Date("2024-08-03T07:45:00Z"),
    lastSeenDate: new Date("2024-08-03"),
    description: "Large orange Maine Coon cat, very fluffy with distinctive ear tufts. Found sleeping in garage. Appears well-fed and healthy."
  }
];

export const getAllPetReports = async (req, res) => {
  res.status(200).json(petReportSampleData);
  return;
};

export const getPetReportById = async (req, res) => {
  const reportId = req.params.id;
  const petReport = await PetReport.findById(reportId);
  if (!petReport) {
    res.status(404).send();
    return;
  }
  
  res.status(200).json(petReport);
  return;
};

export const createPetReport = async (req, res) => {
  const report = req.body;
  
  if (
    !report.reportType ||
    !report.petName ||
    !report.petPic ||
    report.type ||
    !report.breed ||
    report.color ||
    !report.lastSeenTime ||
    !report.lastSeenDate ||
    !report.description
  ) {
    res.status(400).send();
    return;
  }
  
  await PetReport.create({
    reportType: report.reportType,
    petName: report.petName,
    petPic: report.petPic,
    type: report.type,
    breed: report.breed,
    color: report.color,
    lastSeenTime: new Date(report.lastSeenTime),
    lastSeenDate: new Date(report.lastSeenDate),
    description: report.description,
  });
  
  res.status(201).send();
  return;
};

export const deletePetReport = async (req, res) => {
  const reportId = req.params.id;
  await PetReport.findByIdAndDelete(reportId);
  
  res.status(200).send();
  return;
};

export const updatePetReport = async (req, res) => {
  const reportId = req.params.reportId;
  const updatedReport = req.body;
  
  if (
    !updatedReport.reportType ||
    !updatedReport.petName ||
    !updatedReport.petPic ||
    updatedReport.type  ||
    !updatedReport.breed ||
    updatedReport.color ||
    !updatedReport.lastSeenTime ||
    !updatedReport.lastSeenDate ||
    !updatedReport.description
  ) {
    res.status(400).send();
    return;
  }
  
  await PetReport.findByIdAndUpdate(reportId, {
    reportType: updatedReport.reportType,
    petName: updatedReport.petName,
    petPic: updatedReport.petPic,
    type: updatedReport.type,
    breed: updatedReport.breed,
    color: updatedReport.color,
    lastSeenTime: new Date(updatedReport.lastSeenTime),
    lastSeenDate: new Date(updatedReport.lastSeenDate),
    description: updatedReport.description,
  });
  res.status(200).send();
  return;
};