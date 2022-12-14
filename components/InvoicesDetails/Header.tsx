import {
  Box,
  Paper,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Invoice } from "../../lib/interfaces";
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
        <Status invoice={invoice} />
        {!isMobile && (
          <Box flexGrow={1} justifySelf="end">
            <Actions status={invoice.status}/>
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default Header;

const Status = ({ invoice }: Props) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent={{ xs: "space-between", sm: "unset" }}
      alignItems="center"
      width={{ xs: "100%", sm: "auto" }}
      gap={3}
    >
      <Typography color="text.secondary">Status</Typography>
      <StatusButton status={invoice.status} />
    </Stack>
  );
};
