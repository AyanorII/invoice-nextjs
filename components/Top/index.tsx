import { Stack } from "@mui/material";
import NumberOfInvoices from "./NumberOfInvoices";

type Props = {
  numberOfInvoices: number
};

const Top = ({numberOfInvoices}: Props) => {
  return (
    <Stack flexDirection="row">
      <NumberOfInvoices number={numberOfInvoices}/>
    </Stack>
  );
};

export default Top;
