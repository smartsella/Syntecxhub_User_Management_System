import User from "../models/user.model.js";
import { success, error } from "../utils/response.js";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return success(res, user, 201);
  } catch (err) {
    return error(res, err.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return success(res, users);
  } catch (err) {
    return error(res, err.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return error(res, "User not found", 404);
    return success(res, user);
  } catch (err) {
    return error(res, err.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return error(res, "User not found", 404);
    return success(res, user);
  } catch (err) {
    return error(res, err.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return error(res, "User not found", 404);
    return success(res, "User deleted");
  } catch (err) {
    return error(res, err.message);
  }
};
