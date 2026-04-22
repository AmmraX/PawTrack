import User from "../infrastructure/schemas/User.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
  return;
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).send();
    return;
  }
  
  res.status(200).json(user);
  return;
};

export const getUserByEmail = async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.status(404).send();
    return;
  }
  
  res.status(200).json(user);
  return;
};

export const createUser = async (req, res) => {
  const user = req.body;
  
  if (
    !user.username ||
    !user.email ||
    !user.password ||
    !user.address ||
    !user.phoneNumber
  ) {
    res.status(400).send();
    return;
  }
  
  await User.create({
    username: user.username,
    email: user.email,
    password: user.password,
    address: user.address,
    phoneNumber: parseInt(user.phoneNumber),
  });
  
  res.status(201).send();
  return;
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await User.findByIdAndDelete(userId);
  
  res.status(200).send();
  return;
};

export const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updatedUser = req.body;
  
  if (
    !updatedUser.username ||
    !updatedUser.email ||
    !updatedUser.password ||
    !updatedUser.address ||
    !updatedUser.phoneNumber
  ) {
    res.status(400).send();
    return;
  }
  
  await User.findByIdAndUpdate(userId, {
    username: updatedUser.username,
    email: updatedUser.email,
    password: updatedUser.password,
    address: updatedUser.address,
    phoneNumber: parseInt(updatedUser.phoneNumber),
  });
  
  res.status(200).send();
  return;
};