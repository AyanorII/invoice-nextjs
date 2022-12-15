import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Theme, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleInvoiceMenu } from "../../store/invoicesSlice";

type Props = {};

const NewInvoiceButton = (props: Props) => {
  const dispatch = useDispatch();

  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  const handleClick = () => {
    dispatch(toggleInvoiceMenu());
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={<AddCircleIcon sx={{ fontSize: "2rem !important" }} />}
      >
        New {isTablet ? "Invoice" : ""}
      </Button>
    </>
  );
};

export default NewInvoiceButton;
