import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InvoiceStatus } from "../lib/interfaces";

export interface InvoiceState {
  filters: InvoiceStatus[];
  isCreateInvoiceMenuOpen: boolean;
}

const initialState: InvoiceState = {
  filters: [],
  isCreateInvoiceMenuOpen: false,
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
  },
});

export const { setFilters, toggleCreateInvoiceMenu, closeCreateInvoiceMenu } =
  invoicesSlice.actions;
export default invoicesSlice.reducer;
