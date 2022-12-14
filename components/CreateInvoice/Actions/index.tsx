import { Button, Stack } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { InvoiceStatus } from "../../../lib/interfaces";
import {
  discardButtonStyles,
  saveAsDraftButtonStyles,
  stackStyles,
} from "./styles";

type Props = {
  handleClose: () => void;
  isBottomOfPage: boolean;
};

const Actions = ({ isBottomOfPage, handleClose }: Props) => {
  const { reset, setValue } = useFormContext();

  const handleDraft = () => {
    setValue("status", InvoiceStatus.DRAFT);
  };

  const handleSaveAndSend = () => {
    setValue("status", InvoiceStatus.PENDING);
  }

  return (
    <Stack
      flexDirection="row"
      gap={2}
      padding={2}
      justifyContent={{ xs: "center", sm: "flex-start" }}
      sx={{
        ...stackStyles,
        boxShadow: isBottomOfPage ? "0 0 50px 50px #00000050" : "",
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          handleClose();
          reset({
            keepDefaultValues: true,
          });
        }}
        sx={discardButtonStyles}
      >
        Discard
      </Button>
      <Button
        type="submit"
        onClick={handleDraft}
        variant="contained"
        sx={saveAsDraftButtonStyles}
      >
        Save as Draft
      </Button>
      <Button
        type="submit"
        onClick={handleSaveAndSend}
        variant="contained"
        color="primary"
      >
        Save & Send
      </Button>
    </Stack>
  );
};

export default Actions;
