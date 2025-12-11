import React from "react";
import { styled } from "@mui/system";
import PendingInvitationListItem from "./PendingInvitationListItem";
import { connect } from "react-redux";

// const DUMMY_INVITATIONS = [
//   {
//     _id: "1",
//     senderId: {
//       username: "Mark",
//       mail: "mark@gmail.com",
//     },
//   },
//   {
//     _id: "2",
//     senderId: {
//       username: "Jerry",
//       mail: "jerry@gmail.com",
//     },
//   },
//   {
//     _id: "3",
//     senderId: {
//       username: "Tom",
//       mail: "tom@gmail.com",
//     },
//   },
// ];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationList = ({ pendingFriendsInvitations }) => {
  console.log(pendingFriendsInvitations, " <- pendinf frineds invi");
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => (
        <PendingInvitationListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
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
export default connect(mapStoreStateToProps)(PendingInvitationList);
