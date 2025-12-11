import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";
const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

// const DUMMY_FRIENDS = [
//   { id: 1, username: "Mark", isOnline: true },
//   { id: 2, username: "Jerry", isOnline: false },
//   { id: 3, username: "Tom", isOnline: true },
// ];
const FriendsList = ({ friends, onlineUsers }) => {
  console.log("in friend list ", friends);

  const checkOnlineStatus = (friendId) => {
    return onlineUsers.some((user) => user.userId === friendId);
  };

  return (
    <MainContainer>
      {friends.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={checkOnlineStatus(f.id)} // checking online status
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps, null)(FriendsList);
