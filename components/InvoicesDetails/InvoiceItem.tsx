import { Grid, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getFormattedPrice } from "../../lib/helpers";
import { Item } from "../../lib/interfaces";
import { RootState } from "../../store/store";

type Props = {
  item: Item;
};

const InvoiceItem = ({ item }: Props) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const { name, quantity, price, total } = item;

  const displayStyles: SxProps = {
    display: { xs: "none", sm: "block" },
  };

  const gridStyles: SxProps = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", sm: "2fr 1fr 1fr 1fr" },
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      gap={3}
      sx={gridStyles}
    >
      {/* ------------------------- Name / Quantity ------------------------ */}
      <Grid item>
        <ItemInfo>{name}</ItemInfo>
        <Typography
          fontWeight="bold"
          display={{ xs: "block", sm: "none" }}
          sx={{ color: themeMode === "light" ? "#7E88C3" : "#888EB0" }}
        >
          {quantity} x {getFormattedPrice(price)}
        </Typography>
      </Grid>
      {/* ------------------------- Name / Quantity ------------------------ */}
      {/* ---------------------------- Quantity ---------------------------- */}
      <Grid item display={{ xs: "none", sm: "block" }}>
        <ItemInfo sx={{ ...displayStyles, textAlign: "center" }}>
          {quantity}
        </ItemInfo>
      </Grid>
      {/* ---------------------------- Quantity ---------------------------- */}
      {/* ------------------------------ Price ----------------------------- */}
      <Grid item display={{ xs: "none", sm: "block" }}>
        <ItemInfo sx={{ ...displayStyles, textAlign: "end" }}>
          {getFormattedPrice(price)}
        </ItemInfo>
      </Grid>
      {/* ------------------------------ Price ----------------------------- */}
      {/* ------------------------------ Total ----------------------------- */}
      <Grid item justifySelf="end">
        <ItemInfo sx={{ textAlign: "end" }}>
          {getFormattedPrice(total)}
        </ItemInfo>
      </Grid>
      {/* ------------------------------ Total ----------------------------- */}
    </Grid>
  );
};

export default InvoiceItem;

type ItemProps = {
  children: ReactNode;
  sx?: SxProps;
};

const ItemInfo = ({ children, sx }: ItemProps) => {
  return (
    <Typography
      textTransform="capitalize"
      fontWeight="bold"
      sx={{ ...sx, fontSize: "1.15rem" }}
    >
      {children}
    </Typography>
  );
};
