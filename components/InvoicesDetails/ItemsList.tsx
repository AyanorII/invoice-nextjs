import { Grid, Paper, Stack, SxProps, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getFormattedPrice } from "../../lib/helpers";
import { Item } from "../../lib/interfaces";
import { RootState } from "../../store/store";
import InvoiceItem from "./InvoiceItem";

type Props = {
  items: Item[];
  total: number;
};

const ItemsList = ({ items, total }: Props) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const paperStyles: SxProps = {
    marginTop: 3,
    backgroundColor: themeMode === "light" ? "#F9FAFE" : "#152945",
    overflow: "hidden",
    padding: { xs: 3, sm: 4 },
  };

  return (
    <Paper sx={paperStyles}>
      <ItemsHeaders />
      <Stack gap={0.5}>
        {items.map((item) => (
          <div key={item._id?.toString()}>
            <InvoiceItem item={item} />
          </div>
        ))}
      </Stack>
      <Total total={total} />
    </Paper>
  );
};

export default ItemsList;

const ItemsHeaders = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      gap={3}
      marginBottom={1.5}
      sx={{
        display: { xs: "none", sm: "grid" },
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
      }}
    >
      <Grid item>
        <Typography variant="body2" color="text.secondary">
          Item Name
        </Typography>
      </Grid>
      <Grid item textAlign="center">
        <Typography variant="body2" color="text.secondary">
          QTY.
        </Typography>
      </Grid>
      <Grid item textAlign="end">
        <Typography variant="body2" color="text.secondary">
          Price
        </Typography>
      </Grid>
      <Grid item textAlign="end">
        <Typography variant="body2" color="text.secondary">
          Total
        </Typography>
      </Grid>
    </Grid>
  );
};

type TotalProps = {
  total: number;
};
const Total = ({ total }: TotalProps) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      color="white"
      sx={{
        backgroundColor: themeMode === "dark" ? "#0C0E16" : "#373B53",
        padding: { xs: 3, sm: 4 },
        marginInline: { xs: -3, sm: -4 },
        marginBottom: { xs: -3, sm: -4 },
        marginTop: 3,
      }}
    >
      <Typography>Amount Due</Typography>
      <Typography variant="h5" fontWeight="bold">
        {getFormattedPrice(total)}
      </Typography>
    </Stack>
  );
};
