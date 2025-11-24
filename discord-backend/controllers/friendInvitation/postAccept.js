const FriendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdates = require("../../socketHandlers/updates/friends");
// const updateFriends = require("../../socketHandlers/updates/friends");
const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const invitation = await FriendInvitation.findById(id);

    // if requested id not found
    if (!invitation) {
      return res.status(401).send("Error occured. Please try again");
    }

    const { senderId, receiverId } = invitation;

    // add friends to both users
    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    // saving both updates
    await senderUser.save();
    await receiverUser.save();

    // remove user from friendsInviaaion array
    await FriendInvitation.findByIdAndDelete(id);

    // update list of friends if the users are online
    friendsUpdates.updateFriends(senderId.toStrings());
    friendsUpdates.updateFriends(receiverId.toStrings());

    // update list of friends pending invitations
    friendsUpdates.updateFriendsPendingInvitation(receiverId.toString());

    return res.status(200).send("Friends successfully added");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong. Please try again.");
  }
};

module.exports = postAccept;
