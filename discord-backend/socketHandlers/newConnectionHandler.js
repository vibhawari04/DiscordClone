const serverStore = require("../serverStore");
const friendsUpdate = require("../socketHandlers/updates/friends");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  });

  console.log("in serber ", userDetails.userId);
  // update pending friends invitations list
  friendsUpdate.updateFriendsPendingInvitation(userDetails.userId);

  // update friends list
  friendsUpdate.updateFriends(userDetails.userId);
};

module.exports = newConnectionHandler;
