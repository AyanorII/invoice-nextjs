import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InvoiceStatus } from "../lib/interfaces";

export interface InvoiceState {
  filters: InvoiceStatus[];
}

const initialState: InvoiceState = {
  filters: [],
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
  },
});

export const { setFilters } = invoicesSlice.actions;
export default invoicesSlice.reducer;
