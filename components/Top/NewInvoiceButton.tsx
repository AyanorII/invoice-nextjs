import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Theme, useMediaQuery } from '@mui/material';

type Props = {}

const NewInvoiceButton = (props: Props) => {
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  // TODO: Implement functionality
  return (
    <Button
      variant="contained"
      sx={{}}
      startIcon={
        <AddCircleIcon id="here" sx={{ fontSize: "2rem !important" }} />
      }
    >
      New {isTablet ? "Invoice" : ""}
    </Button>
  );
}

export default NewInvoiceButton
