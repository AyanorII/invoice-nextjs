import { Grid } from "@mui/material";
import { useFormState } from "react-hook-form-mui";
import Input from "../../Input";
import FormSection from "./FormSection";

type Props = {};

const BillFrom = (props: Props) => {
  const { errors } = useFormState();
  const senderErrors = errors.sender as any;

  return (
    <FormSection sectionHeading="Bill From">
      <Grid item xs={12}>
        <Input
          name="sender.street"
          label="Street Address"
          error={Boolean(senderErrors?.street)}
          placeholder="19 Union Terrace"
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Input
          name="sender.city"
          label="City"
          error={Boolean(senderErrors?.city)}
          placeholder="London"
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Input
          name="sender.postCode"
          label="Post Code"
          error={Boolean(senderErrors?.postCode)}
          placeholder="E1 3EZ"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Input
          name="sender.country"
          label="Country"
          error={Boolean(senderErrors?.country)}
          placeholder="United Kingdom"
        />
      </Grid>
    </FormSection>
  );
};

export default BillFrom;
