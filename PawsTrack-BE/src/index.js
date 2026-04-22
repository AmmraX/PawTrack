import express from "express";
import connectDB from "./infrastructure/db.js";

import petReportRouter from "./api/petReport.js";
import usersRouter from "./api/user.js";
import notificationRouter from "./api/notification.js";
import messageRouter from "./api/message.js";

const app = express();

connectDB();

app.use(express.json());

app.use("/api/pet", petReportRouter);
app.use("/api/users", usersRouter);
app.use("/api/notification", notificationRouter);
app.use("/api/message", messageRouter);

const PORT = 8001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));