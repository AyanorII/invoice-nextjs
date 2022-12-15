import { Grid } from "@mui/material";
import { useFormState } from "react-hook-form";
import Input from "../../Input";
import FormSection from './FormSection';

type Props = {};

const InvoiceInfo = (props: Props) => {
  const { errors } = useFormState();

  return (
    <FormSection sx={{marginTop: 1}}>
      {/* ---------------------------- Invoice Date ------------------------ */}
      <Grid item xs={12} sm={6}>
        <Input
          name="createdAt"
          label="Invoice Date"
          type="date"
          error={Boolean(errors?.createdAt)}
        />
      </Grid>
      {/* ---------------------------- Invoice Date ------------------------ */}
      {/* ---------------------------- Payment Terms ----------------------- */}
      <Grid item xs={12} sm={6}>
        <Input
          name="paymentTerms"
          label="Payment Terms"
          type="select"
          error={Boolean(errors?.paymentTerms)}
          options={[
            { id: 1, label: "Net 1 Day" },
            { id: 7, label: "Net 7 Days" },
            { id: 14, label: "Net 14 Days" },
            { id: 30, label: "Net 30 Days" },
          ]}
        />
      </Grid>
      {/* ---------------------------- Payment Terms ----------------------- */}
      {/* ----------------------------- Description ------------------------ */}
      <Grid item xs={12}>
        <Input
          name="description"
          label="Project Description"
          error={Boolean(errors?.description)}
          placeholder="Design website for a small business"
        />
      {/* ----------------------------- Description ------------------------ */}
      </Grid>
    </FormSection>
  );
};

export default InvoiceInfo;
