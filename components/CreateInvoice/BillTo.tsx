import { Grid } from "@mui/material";
import { useFormState } from "react-hook-form";
import Input from "../Input";
import FormSection from "./FormSection";

type Props = {};

const BillTo = (props: Props) => {
  const { errors } = useFormState();
  const clientErrors = errors.client as any;
  const clientAddressErrors = clientErrors?.address as any;

  return (
    <FormSection sectionHeading="Bill To">
      {/* --------------------------- Client name -------------------------- */}
      <Grid item xs={12}>
        <Input
          name="client.name"
          label="Client's Name"
          error={Boolean(clientErrors?.name)}
          placeholder="John Doe"
        />
      </Grid>
      {/* --------------------------- Client name -------------------------- */}
      {/* --------------------------- Client email ------------------------- */}
      <Grid item xs={12}>
        <Input
          name="client.email"
          label="Client's Email"
          error={Boolean(clientErrors?.email)}
          placeholder="johndoe@mail.com"
        />
      </Grid>
      {/* --------------------------- Client email ------------------------- */}
      {/* --------------------------- Client street ------------------------ */}
      <Grid item xs={12}>
        <Input
          name="client.address.street"
          label="Street Address"
          error={Boolean(clientAddressErrors?.street)}
          placeholder="84 Church Way"
        />
      </Grid>
      {/* --------------------------- Client street ------------------------ */}
      {/* ---------------------------- Client city ------------------------- */}
      <Grid item xs={6} sm={4}>
        <Input
          name="client.address.city"
          label="City"
          error={Boolean(clientAddressErrors?.city)}
          placeholder="Bradford"
        />
      </Grid>
      {/* ---------------------------- Client city ------------------------- */}
      {/* -------------------------- Client post code ---------------------- */}
      <Grid item xs={6} sm={4}>
        <Input
          name="client.address.postCode"
          label="Post Code"
          error={Boolean(clientAddressErrors?.postCode)}
          placeholder="BD1 9PB"
        />
      </Grid>
      {/* -------------------------- Client post code ---------------------- */}
      {/* --------------------------- Client country ----------------------- */}
      <Grid item xs={12} sm={4}>
        <Input
          name="client.address.country"
          label="Country"
          error={Boolean(clientAddressErrors?.country)}
          placeholder="United Kingdom"
        />
      </Grid>
      {/* --------------------------- Client country ----------------------- */}

    </FormSection>
  );
};

export default BillTo;
