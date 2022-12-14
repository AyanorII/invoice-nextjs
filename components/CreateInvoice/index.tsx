import { Drawer, Stack, Theme, Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { UIEvent, useState } from "react";
import { FormContainer } from "react-hook-form-mui";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Invoice, InvoiceStatus, Item } from "../../lib/interfaces";
import { closeCreateInvoiceMenu } from "../../store/invoicesSlice";
import { RootState } from "../../store/store";
import GoBackButton from "../GoBackButton";
import Actions from "./Actions/index";
import ItemList from "./items/ItemList";
import BillFrom from "./sections/BillFrom";
import BillTo from "./sections/BillTo";
import InvoiceInfo from "./sections/InvoiceInfo";

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
        formValues.total += item.price * item.quantity;
      });
    };

    try {
      transformItemsValues(formValues.items);
      const url = `${process.env.NEXT_PUBLIC_API_URL}/invoices`;
      const createInvoice = axios.post(url, formValues);

      toast.promise(createInvoice, {
        pending: "Creating invoice...",
        success: {
          render({ data }) {
            return (
              <Typography>
                Invoice created successfully with code:{" "}
                <Typography component="span" fontWeight="bold">
                  #{data?.data.code}
                </Typography>
              </Typography>
            );
          },
        },
        error: "Error creating invoice, try again later",
      });
      handleClose();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  };

  const [isBottomOfPage, setIsBottomOfPage] = useState(false);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const drawer = e.target as HTMLDivElement;
    const difference = drawer.scrollHeight - drawer.scrollTop;
    const offset = 10;
    if (difference >= drawer.clientHeight + offset) {
      setIsBottomOfPage(true);
    } else {
      setIsBottomOfPage(false);
    }
  };

  return (
    <Drawer
      open={isMenuOpen}
      onClose={handleClose}
      onScrollCapture={handleScroll}
      sx={{
        "& .MuiPaper-root": {
          minWidth: { xs: "100vw", sm: "auto" },
          maxWidth: { sm: "70vw", lg: "40vw" },
          borderRadius: { xs: 0, sm: "0 8px 8px 0" },
          background: (theme: Theme) => theme.palette.background.default,
          alignItems: "start",
          gap: 3,
          paddingBottom: { xs: 0, sm: 3 },
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
        <Actions handleClose={handleClose} isBottomOfPage={isBottomOfPage} />
      </FormContainer>
    </Drawer>
  );
};

export default CreateInvoice;
