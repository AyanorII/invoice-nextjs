import { Button, Modal, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Invoice, InvoiceStatus } from "../../../lib/interfaces";
import { setInvoice, toggleInvoiceMenu } from "../../../store/invoicesSlice";
import { RootState } from "../../../store/store";
import { buttonStyles, modalStyles } from "./styles";

const Actions = () => {
  const invoice = useSelector(
    (state: RootState) => state.invoices.currentInvoice
  );
  const status = invoice?.status || InvoiceStatus.DRAFT;

  const { query } = useRouter();
  const { code } = query;

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent={{ xs: "center", sm: "end" }}
      gap={2}
    >
      {status === InvoiceStatus.DRAFT && <EditButton code={code as string} />}
      <DeleteButton code={code as string} />
      {status !== InvoiceStatus.PAID && (
        <MarkAsPaidButton code={code as string} />
      )}
    </Stack>
  );
};

export default Actions;

type ButtonProps = {
  code: Invoice["code"];
};

const EditButton = ({ code }: ButtonProps) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(toggleInvoiceMenu());
  };

  return (
    <Button
      onClick={handleOpen}
      variant="contained"
      color="info"
      sx={buttonStyles}
    >
      Edit
    </Button>
  );
};

const DeleteButton = ({ code }: ButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { push } = useRouter();

  const handleDelete = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/invoices/${code}`;
    try {
      await axios.delete(url);
      toast.success(
        <Typography>
          Invoice{" "}
          <Typography component="span" fontWeight="bold">
            #{code}
          </Typography>{" "}
          was deleted
        </Typography>
      );
      push("/");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="error"
        sx={buttonStyles}
      >
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Paper sx={modalStyles}>
          <Typography variant="h4" fontWeight="bold" marginBottom={1}>
            Confirm Deletion
          </Typography>
          <Typography marginBottom={2}>
            Are you sure you want to delete invoice{" "}
            <Typography component="span" fontWeight="bold">
              #{code}
            </Typography>
            ? This action cannot be undone.
          </Typography>
          <Stack
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
            gap={2}
          >
            <Button variant="contained" color="info" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
};

const MarkAsPaidButton = ({ code }: ButtonProps) => {
  const dispatch = useDispatch();

  const handleMarkAsPaid = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/invoices/${code}`;

    try {
      const response = await axios.patch(url, { status: InvoiceStatus.PAID });
      const invoice = response.data;
      toast.success(`Invoice #${code} was marked as paid`);
      dispatch(setInvoice(invoice));
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  };

  return (
    <Button
      onClick={handleMarkAsPaid}
      variant="contained"
      color="primary"
      sx={buttonStyles}
    >
      Mark as Paid
    </Button>
  );
};
