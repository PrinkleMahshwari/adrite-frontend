import api from "./api";

// chat APIs
// websocket future me add hoga

// get chats

export const getChats = async () => {

  const response = await api.get(
    "/chat"
  );

  return response.data;
};

// send message

export const sendMessage = async (
  messageData
) => {

  const response = await api.post(
    "/chat",
    messageData
  );

  return response.data;
};