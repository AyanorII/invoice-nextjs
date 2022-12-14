import { Button, Modal, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { InvoiceStatus } from "../../../lib/interfaces";
import { buttonStyles, modalStyles } from "./styles";

type Props = {
  status: InvoiceStatus;
};

const Actions = ({ status }: Props) => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent={{ xs: "center", sm: "end" }}
      gap={2}
    >
      {status === InvoiceStatus.DRAFT && <EditButton />}
      <DeleteButton />
      {status !== InvoiceStatus.PAID && <MarkAsPaidButton />}
    </Stack>
  );
};

export default Actions;

const EditButton = () => {
  // TODO: Implement functionality
  return (
    <Button variant="contained" color="info">
      Edit
    </Button>
  );
};

const DeleteButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { query, push } = useRouter();
  const { code } = query;

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

const MarkAsPaidButton = () => {
  // TODO: Implement functionality
  return (
    <Button variant="contained" color="primary" sx={buttonStyles}>
      Mark as Paid
    </Button>
  );
};
