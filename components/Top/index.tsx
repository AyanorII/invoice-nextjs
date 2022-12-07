import { Stack } from "@mui/material";
import FilterInvoice from "./FilterInvoice";
import NumberOfInvoices from "./NumberOfInvoices";

type Props = {
  numberOfInvoices: number;
};

const Top = ({ numberOfInvoices }: Props) => {
  return (
    <Stack flexDirection="row" gap={2}>
      <NumberOfInvoices number={numberOfInvoices} />
      <Stack
        flexGrow={1}
        marginLeft="auto"
        flexDirection="row"
        justifyContent="end"
      >
        <FilterInvoice />
      </Stack>
    </Stack>
  );
};

export default Top;
