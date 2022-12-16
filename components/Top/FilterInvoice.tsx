import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Button, Menu, Theme, Typography, useMediaQuery } from "@mui/material";
import { MouseEvent, useState } from "react";
import FilterOptionsList from "./FilterOptionsList";
type Props = {};

const FilterInvoice = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      >
        <Typography color="text.primary" fontWeight="bold" variant="body2">
          Filter {isTablet ? "by status" : ""}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiList-root": {
            paddingInline: 2,
          },
          "& .MuiPaper-root": {
            padding: 1
          }
        }}
      >
        <FilterOptionsList />
      </Menu>
    </>
  );
};

export default FilterInvoice;
