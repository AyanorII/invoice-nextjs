import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Invoice, InvoiceStatus } from "../lib/interfaces";

const defaultInvoice: Omit<Invoice, "_id"> = {
  code: "XX0000",
  status: InvoiceStatus.DRAFT,
  sender: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  client: {
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
  },
  createdAt: new Date().toISOString(),
  paymentTerms: 7,
  paymentDue: new Date().toISOString(),
  description: "",
  items: [
    {
      name: "",
      quantity: 1,
      price: 0,
      total: 0,
    },
  ],
  total: 0,
};

export interface InvoiceState {
  filters: InvoiceStatus[];
  isInvoiceMenuOpen: boolean;
  currentInvoice: Invoice | typeof defaultInvoice;
}

const initialState: InvoiceState = {
  filters: [],
  isInvoiceMenuOpen: false,
  currentInvoice: defaultInvoice,
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<InvoiceStatus>) => {
      const filterOption = action.payload;
      state.filters = state.filters.includes(filterOption)
        ? state.filters.filter((status) => status !== filterOption)
        : [...state.filters, filterOption];
    },

    toggleInvoiceMenu: (state) => {
      state.isInvoiceMenuOpen = !state.isInvoiceMenuOpen;
    },

    closeInvoiceMenu: (state) => {
      state.isInvoiceMenuOpen = false;
    },

    setInvoice: (state, action: PayloadAction<Invoice>) => {
      state.currentInvoice = action.payload;
    },
  },
});

export const { setFilters, toggleInvoiceMenu, closeInvoiceMenu, setInvoice } =
  invoicesSlice.actions;
export default invoicesSlice.reducer;
