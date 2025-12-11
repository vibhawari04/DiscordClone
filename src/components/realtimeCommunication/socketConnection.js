import io from "socket.io-client";
import {
  setPendingFriendsInvitation,
  setFriends,
  setOnlineUsers,
} from "../../store/actions/friendsActions";
import store from "../../store/store";
import { updateDirectChatHistoryIfActive } from "../../shared/utils/chat";
let socket = null;

export const connectWithSocketServer = (userDetails) => {
  // to check the user is currently online
  const jwtToken = userDetails.token;

  socket = io("http://localhost:5000", {
    auth: {
      token: jwtToken,
    },
  });
  console.log(socket);
  socket.on("connect", () => {
    console.log("successfully connection with socket.io server");
    console.log(socket.id);
    console.log(socket.userDetails);
  });

  // listening friends invitations
  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    console.log("data ", data);
    console.log("friends invitation event came");
    console.log("pendinginvitatio in socketconnection.js ", pendingInvitations);
    store.dispatch(setPendingFriendsInvitation(pendingInvitations));
  });

  // listening friend-list to redirect on screen who is in friend list
  socket.on("friends-list", (data) => {
    const { friends } = data;

    console.log("socket connection me friend list  data", data);
    console.log("socket connection me friend list  data-friends", data.friends);
    console.log("socket connection me friend", friends);

    store.dispatch(setFriends(friends));
  });

  // // online indication
  socket.on("online-users", (data) => {
    console.log("online user update came");
    // const { friends } = data;
    // store.dispatch(setFriends(friends));
    console.log("printing data.online Users ", data.onlineUsers);
    store.dispatch(setOnlineUsers(data.onlineUsers));
  });

  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message);
  });

  socket.on("direct-chat-history", (data) => {
    // console.log("direct chat history came from server");
    // console.log(data);
    // if (!user) {
    //   console.warn("Skipping chat update, userDetails is null");
    //   return;
    // }
    updateDirectChatHistoryIfActive(data);
  });
};

export const sendDirectMessage = (data) => {
  console.log("In socketconnection sendDirectMessage data", data);
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  console.log("getDirectChatHiistory ", data);
  socket.emit("get-direct-chat-history", data);
};
