import {
  capitalize,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEXT_COLOR } from "../../lib/constants";
import { InvoiceStatus } from "../../lib/interfaces";
import { setFilters } from "../../store/invoicesSlice";
import { RootState } from "../../store/store";

type Props = {};

const FilterOptionsList = (props: Props) => {
  const filterOptions = [
    {
      value: InvoiceStatus.PAID,
      label: capitalize(InvoiceStatus.PAID),
    },
    {
      value: InvoiceStatus.PENDING,
      label: capitalize(InvoiceStatus.PENDING),
    },
    {
      value: InvoiceStatus.DRAFT,
      label: capitalize(InvoiceStatus.DRAFT),
    },
  ];

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.invoices.filters);

  const handleCheckboxFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setFilters(value as InvoiceStatus));
  };

  return (
    <FormGroup>
      {filterOptions.map(({ value, label }) => (
        <FormControlLabel
          key={value}
          sx={{ "& .MuiTypography-root": { fontWeight: "medium" } }}
          control={
            <Checkbox
              onChange={handleCheckboxFilter}
              checked={filters.includes(value)}
              sx={{
                color: TEXT_COLOR.light.secondary,
              }}
            />
          }
          value={value}
          label={label}
        />
      ))}
    </FormGroup>
  );
};

export default FilterOptionsList;
