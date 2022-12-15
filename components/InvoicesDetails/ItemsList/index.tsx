import { Grid, Paper, Stack, Typography } from "@mui/material";
import { getFormattedPrice } from "../../../lib/helpers";
import { Item } from "../../../lib/interfaces";
import InvoiceItem from "../InvoiceItem";
import { itemsHeadersStyles, paperStyles, totalStyles } from "./styles";

type Props = {
  items: Item[];
  total: number;
};

const ItemsList = ({ items, total }: Props) => {
  return (
    <Paper sx={paperStyles}>
      <ItemsHeaders />
      <Stack gap={0.5}>
        {items.map((item, index) => (
          <div key={item._id?.toString() || index}>
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
      sx={itemsHeadersStyles}
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
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      color="white"
      sx={totalStyles}
    >
      <Typography>Amount Due</Typography>
      <Typography variant="h5" fontWeight="bold">
        {getFormattedPrice(total)}
      </Typography>
    </Stack>
  );
};
