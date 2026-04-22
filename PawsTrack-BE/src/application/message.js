import Message from "../infrastructure/schemas/Message.js";

export const getAllMessages = async (req, res) => {
  const messages = await Message.find().populate('userId');
  res.status(200).json(messages);
  return;
};

export const getMessageById = async (req, res) => {
  const messageId = req.params.id;
  const message = await Message.findById(messageId).populate('userId');
  if (!message) {
    res.status(404).send();
    return;
  }
  
  res.status(200).json(message);
  return;
};

export const getMessagesByUserId = async (req, res) => {
  const userId = req.params.userId;
  const messages = await Message.find({ userId: userId }).populate('userId');
  res.status(200).json(messages);
  return;
};

export const createMessage = async (req, res) => {
  const message = req.body;
  
  if (
    !message.type ||
    !message.content ||
    !message.dateTime ||
    !message.userId
  ) {
    res.status(400).send();
    return;
  }
  
  await Message.create({
    type: message.type,
    content: message.content,
    dateTime: new Date(message.dateTime),
    userId: message.userId,
  });
  
  res.status(201).send();
  return;
};

export const deleteMessage = async (req, res) => {
  const messageId = req.params.id;
  await Message.findByIdAndDelete(messageId);
  
  res.status(200).send();
  return;
};

export const updateMessage = async (req, res) => {
  const messageId = req.params.messageId;
  const updatedMessage = req.body;
  
  if (
    !updatedMessage.type ||
    !updatedMessage.content ||
    !updatedMessage.dateTime ||
    !updatedMessage.userId
  ) {
    res.status(400).send();
    return;
  }
  
  await Message.findByIdAndUpdate(messageId, {
    type: updatedMessage.type,
    content: updatedMessage.content,
    dateTime: new Date(updatedMessage.dateTime),
    userId: updatedMessage.userId,
  });
  
  res.status(200).send();
  return;
};