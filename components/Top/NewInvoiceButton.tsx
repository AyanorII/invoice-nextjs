import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Theme, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleCreateInvoiceMenu } from '../../store/invoicesSlice';
import CreateInvoice from '../CreateInvoice';

type Props = {}

const NewInvoiceButton = (props: Props) => {
  const dispatch = useDispatch();

  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  const handleClick = () => {
    dispatch(toggleCreateInvoiceMenu())
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={
          <AddCircleIcon id="here" sx={{ fontSize: "2rem !important" }} />
        }
      >
        New {isTablet ? "Invoice" : ""}
      </Button>
      <CreateInvoice />
    </>
  );
}

export default NewInvoiceButton
