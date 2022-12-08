import { Grid, Paper, Stack, Typography } from "@mui/material";
import { Invoice } from "../../lib/interfaces";
import InvoiceCode from "../Invoices/InvoiceCode";
import AddressInfo from "./AddressInfo";
import BillTo from "./BillTo";
import DateInfo from "./DateInfo";
import SentTo from "./SentTo";

type Props = {
  invoice: Invoice;
};

const Info = ({ invoice }: Props) => {
  const { code, description, sender, createdAt, paymentDue, client } = invoice;

  return (
    <Paper sx={{ padding: 3 }}>
      <Grid container rowGap={2}>
        {/* ---------------------- Code / Description ---------------------- */}
        <Grid item xs={12} sm={6}>
          <InvoiceCode>{code}</InvoiceCode>
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
        <Grid item xs={6} sm={4}>
          <SentTo email={client.email} />
        </Grid>
        {/* --------------------------- Sent To ---------------------------- */}
      </Grid>
    </Paper>
  );
};

export default Info;
