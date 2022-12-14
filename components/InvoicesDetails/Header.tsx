import {
  Box,
  Paper,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Invoice, InvoiceStatus } from "../../lib/interfaces";
import { RootState } from "../../store/store";
import StatusButton from "../Invoices/StatusButton";
import Actions from "./Actions";

type Props = {
  invoice: Invoice;
};

const Header = ({ invoice }: Props) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Paper sx={{ width: "100%", marginBlock: 3 }}>
      <Stack flexDirection="row" gap={2}>
        <Status />
        {!isMobile && (
          <Box flexGrow={1} justifySelf="end">
            <Actions />
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default Header;

const Status = () => {
  const invoice = useSelector(
    (state: RootState) => state.invoices.currentInvoice
  );

  return (
    <Stack
      flexDirection="row"
      justifyContent={{ xs: "space-between", sm: "unset" }}
      alignItems="center"
      width={{ xs: "100%", sm: "auto" }}
      gap={3}
    >
      <Typography color="text.secondary">Status</Typography>
      <StatusButton status={invoice?.status || InvoiceStatus.DRAFT} />
    </Stack>
  );
};
