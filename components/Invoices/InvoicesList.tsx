import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Invoice } from "../../lib/interfaces";
import { RootState } from "../../store/store";
import InvoiceCard from "./InvoiceCard";

type Props = {
  invoices: Invoice[];
};

const InvoicesList = ({ invoices }: Props) => {
  const filters = useSelector((state: RootState) => state.invoices.filters);

  const filteredInvoices = invoices.filter((invoice) =>
    filters.length > 0 ? filters.includes(invoice.status) : invoice
  );

  return (
    <Stack gap={2}>
      {filteredInvoices.map((invoice: Invoice) => (
        <InvoiceCard key={invoice._id.toString()} invoice={invoice} />
      ))}
    </Stack>
  );
};

export default InvoicesList;
