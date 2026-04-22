import Notification from "../infrastructure/schemas/Notification.js";

export const getAllNotifications = async (req, res) => {
  const notifications = await Notification.find().populate('User_ID');
  res.status(200).json(notifications);
  return;
};

export const getNotificationById = async (req, res) => {
  const notificationId = req.params.id;
  const notification = await Notification.findById(notificationId).populate('User_ID');
  if (!notification) {
    res.status(404).send();
    return;
  }
  
  res.status(200).json(notification);
  return;
};

export const getNotificationsByUserId = async (req, res) => {
  const userId = req.params.userId;
  const notifications = await Notification.find({ User_ID: userId }).populate('User_ID');
  res.status(200).json(notifications);
  return;
};

export const createNotification = async (req, res) => {
  const notification = req.body;
  
  
  if (!notification.User_ID) {
    res.status(400).send();
    return;
  }
  
  await Notification.create({
    Type: notification.Type,
    Content: notification.Content,
    DateTime: notification.DateTime ? new Date(notification.DateTime) : new Date(),
    User_ID: notification.User_ID,
  });
  
  res.status(201).send();
  return;
};

export const deleteNotification = async (req, res) => {
  const notificationId = req.params.id;
  await Notification.findByIdAndDelete(notificationId);
  
  res.status(200).send();
  return;
};

export const updateNotification = async (req, res) => {
  const notificationId = req.params.notificationId;
  const updatedNotification = req.body;
  
  if (!updatedNotification.User_ID) {
    res.status(400).send();
    return;
  }
  
  await Notification.findByIdAndUpdate(notificationId, {
    Type: updatedNotification.Type,
    Content: updatedNotification.Content,
    DateTime: updatedNotification.DateTime ? new Date(updatedNotification.DateTime) : undefined,
    User_ID: updatedNotification.User_ID,
  });
  
  res.status(200).send();
  return;
};