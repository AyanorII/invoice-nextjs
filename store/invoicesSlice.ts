import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Invoice, InvoiceStatus } from "../lib/interfaces";

export interface InvoiceState {
  filters: InvoiceStatus[];
  isCreateInvoiceMenuOpen: boolean;
  currentInvoice: Invoice | null;
}

const initialState: InvoiceState = {
  filters: [],
  isCreateInvoiceMenuOpen: false,
  currentInvoice: null,
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

    toggleCreateInvoiceMenu: (state) => {
      state.isCreateInvoiceMenuOpen = !state.isCreateInvoiceMenuOpen;
    },

    closeCreateInvoiceMenu: (state) => {
      state.isCreateInvoiceMenuOpen = false;
    },

    setInvoice: (state, action: PayloadAction<Invoice>) => {
      state.currentInvoice = action.payload;
    },
  },
});

export const {
  setFilters,
  toggleCreateInvoiceMenu,
  closeCreateInvoiceMenu,
  setInvoice,
} = invoicesSlice.actions;
export default invoicesSlice.reducer;
