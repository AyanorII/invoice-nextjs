import { Button, Drawer, Stack, Theme, Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { FormContainer } from "react-hook-form-mui";
import { useDispatch, useSelector } from "react-redux";
import { Invoice, InvoiceStatus, Item } from "../../lib/interfaces";
import { closeCreateInvoiceMenu } from "../../store/invoicesSlice";
import { RootState } from "../../store/store";
import GoBackButton from "../GoBackButton";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import ItemList from "./ItemList";

type Props = {};

interface FormValues extends Omit<Invoice, "_id" | "code" | "paymentDue"> {}

const CreateInvoice = (props: Props) => {
  const dispatch = useDispatch();

  const isMenuOpen = useSelector(
    (state: RootState) => state.invoices.isCreateInvoiceMenuOpen
  );

  const handleClose = () => {
    dispatch(closeCreateInvoiceMenu());
  };

  const defaultValues: FormValues = {
    status: InvoiceStatus.DRAFT,
    sender: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    client: {
      name: "",
      email: "",
      address: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
    },
    createdAt: new Date(),
    paymentTerms: 7,
    description: "",
    items: [
      {
        name: "",
        quantity: 1,
        price: 0,
        total: 0,
      },
    ],
    total: 0,
  };

  const handleSubmit = async (formValues: FormValues) => {
    const transformItemsValues = (items: Item[]) => {
      items.forEach((item) => {
        item.price = Number(item.price);
        item.quantity = Number(item.quantity);
      });
    };

    try {
      transformItemsValues(formValues.items);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/invoices`;
      const response = await axios.post(url, formValues);
      console.log(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  };

  return (
    <Drawer
      open={isMenuOpen}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          minWidth: { xs: "100vw", sm: "auto" },
          maxWidth: { sm: "70vw", lg: "40vw" },
          borderRadius: { xs: 0, sm: "0 8px 8px 0" },
          backgroundColor: (theme: Theme) => theme.palette.background.default,
          alignItems: "start",
          gap: 3,
        },
      }}
    >
      <GoBackButton onClick={handleClose} />
      <Typography variant="h5" fontWeight="bold">
        New Invoice
      </Typography>
      <FormContainer
        defaultValues={defaultValues}
        onSuccess={handleSubmit}
        FormProps={{
          style: {
            width: "100%",
          },
        }}
      >
        <Stack gap={5}>
          <BillFrom />
          <BillTo />
          <InvoiceInfo />
          <ItemList />
        </Stack>
        <Button type="submit" variant="contained" color="primary">
          Save & Send
        </Button>
      </FormContainer>
    </Drawer>
  );
};

export default CreateInvoice;
