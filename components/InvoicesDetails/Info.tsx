import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import InvoiceCode from "../Invoices/InvoiceCode";
import AddressInfo from "./AddressInfo";
import BillTo from "./BillTo";
import DateInfo from "./DateInfo";
import ItemsList from "./ItemsList";
import SentTo from "./SentTo";

const Info = () => {
  const invoice = useSelector(
    (state: RootState) => state.invoices.currentInvoice
  );

  const {
    code,
    description,
    sender,
    createdAt,
    paymentDue,
    client,
    items,
    total,
  } = invoice;

  return (
    <Paper>
      <Grid container rowGap={2}>
        {/* ---------------------- Code / Description ---------------------- */}
        <Grid item xs={12} sm={6}>
          <InvoiceCode variant="h5">{code}</InvoiceCode>
          <Typography color="text.secondary">{description}</Typography>
        </Grid>
        {/* ---------------------- Code / Description ---------------------- */}
        {/* ------------------------ Sender Address ------------------------ */}
        <Grid
          item
          xs={12}
          sm={6}
          justifyContent={{ sm: "end" }}
          sx={{ textAlign: { sm: "right" } }}
        >
          <AddressInfo address={sender} />
        </Grid>
        {/* ------------------------ Sender Address ------------------------ */}
        {/* ----------------------------- Dates ---------------------------- */}
        <Grid item xs={6} sm={4}>
          <Stack gap={3}>
            <DateInfo label="Invoice Date" date={createdAt} />
            <DateInfo label="Payment Due" date={paymentDue} />
          </Stack>
        </Grid>
        {/* ----------------------------- Dates ---------------------------- */}
        {/* --------------------------- Bill To ---------------------------- */}
        <Grid item xs={6} sm={4}>
          <BillTo client={client} />
        </Grid>
        {/* --------------------------- Bill To ---------------------------- */}
        {/* --------------------------- Sent To ---------------------------- */}
        <Grid item xs={12} sm={4}>
          <SentTo email={client.email} />
        </Grid>
        {/* --------------------------- Sent To ---------------------------- */}
      </Grid>
      <ItemsList items={items} total={total} />
    </Paper>
  );
};

export default Info;
