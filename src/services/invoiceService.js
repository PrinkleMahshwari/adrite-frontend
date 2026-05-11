import api from "./api";

// invoice APIs
// billing aur invoice modules ke liye

// get invoices

export const getInvoices = async () => {

  const response = await api.get(
    "/invoices"
  );

  return response.data;
};

// create invoice

export const createInvoice = async (
  invoiceData
) => {

  const response = await api.post(
    "/invoices",
    invoiceData
  );

  return response.data;
};