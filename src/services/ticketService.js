import api from "./api";

// support ticket APIs
// client support module ke liye

// get tickets

export const getTickets = async () => {

  const response = await api.get(
    "/tickets"
  );

  return response.data;
};

// create ticket

export const createTicket = async (
  ticketData
) => {

  const response = await api.post(
    "/tickets",
    ticketData
  );

  return response.data;
};