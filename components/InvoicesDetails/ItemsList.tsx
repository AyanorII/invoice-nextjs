import { Grid, Paper, Stack, SxProps, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Item } from "../../lib/interfaces";
import { RootState } from "../../store/store";
import InvoiceItem from "./InvoiceItem";

type Props = {
  items: Item[];
};

const ItemsList = ({ items }: Props) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const paperStyles: SxProps = {
    marginTop: 3,
    backgroundColor: themeMode === "light" ? "#F9FAFE" : "#152945",
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
        <Typography variant="body2" color="text.secondary">Item Name</Typography>
      </Grid>
      <Grid item textAlign="center">
        <Typography variant="body2" color="text.secondary">QTY.</Typography>
      </Grid>
      <Grid item textAlign="end">
        <Typography variant="body2" color="text.secondary">Price</Typography>
      </Grid>
      <Grid item textAlign="end">
        <Typography variant="body2" color="text.secondary">Total</Typography>
      </Grid>
    </Grid>
  );
};
