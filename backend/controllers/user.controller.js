import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); // $ne stands for not equals, to get all users except the current user who is sending the messages

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUserForSidebar:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
