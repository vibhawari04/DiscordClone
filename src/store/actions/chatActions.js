import { getDirectChatHistory } from "../../components/realtimeCommunication/socketConnection";

export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

export const chatActions = {
  SET_CHOSEN_CHAT_DETAILS: "CHAT.SET_CHOSEN_CHAT_DETAILS",
  SET_MESSAGES: "CHAT.SET_MESSAGES",
  SET_CHAT_TYPE: "CHAT.SET_CHAT_TYPE",
};

export const getActions = (dispatch) => {
  return {
    setChosenChatDetails: (details, chatType) => {
      dispatch(setChosenChatDetails(details, chatType));
    },
  };
};

export const setChosenChatDetails = (chatDetails, type) => {
  // return {
  //   type: chatActions.SET_CHOSEN_CHAT_DETAILS,
  //   chatType: type,
  //   chatDetails,
  // };

  return (dispatch) => {
    dispatch({
      type: chatActions.SET_CHOSEN_CHAT_DETAILS,
      chatDetails,
      chatType: type,
    });

    // Request chat history via socket:
    getDirectChatHistory({
      participants: [chatDetails.id],
      chatId: chatDetails._id,
    });
    // or whatever payload your server expects; often { chatId } is enough
  };
};

export const setMessages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    messages,
  };
};
