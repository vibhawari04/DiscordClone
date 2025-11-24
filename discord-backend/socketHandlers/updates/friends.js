const User = require("../../models/user");
const mongoose = require("mongoose");
const FriendInvitation = require("../../models/friendInvitation");
const serverStore = require("../../serverStore");

const updateFriendsPendingInvitation = async (userId) => {
  console.log("update friend invitation container , user Id ", userId);
  try {
    const pendingInvitations = await FriendInvitation.find({
      // receiverId: userId,
      receiverId: new mongoose.Types.ObjectId(userId),
    }).populate("senderId", "_id username mail");

    console.log("pendingInvitations .... ", pendingInvitations);
    // find all active connections of specific userID
    const receiverList = serverStore.getActiveConnections(userId);

    console.log("receiverList ->>>> ", receiverList);
    const io = serverStore.getSocketServerInstance();
    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friends-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const updateFriends = async (userId) => {
  try {
    // find active connections of specific id(online users)
    const receiverList = serverStore.getActiveConnections(userId);

    if (receiverList.length > 0) {
      const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
        "friends",
        "_id username mail"
      );

      if (user) {
        const FriendsList = user.friends.map((f) => {
          return {
            id: f._id,
            mail: f.mail,
            username: f.username,
          };
        });

        // get io server instance
        const io = serverStore.getSocketServerInstance();
        receiverList.forEach((receiverSocketId) => {
          io.to(receiverSocketId).emit("friends-list", {
            friends: FriendsList ? FriendsList : [],
          });
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateFriendsPendingInvitation,
  updateFriends,
};
