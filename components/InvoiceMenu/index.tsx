import { Drawer, Stack, Theme, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { UIEvent, useEffect, useRef, useState } from "react";
import { FormContainer } from "react-hook-form-mui";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Invoice, InvoiceStatus, Item } from "../../lib/interfaces";
import { closeInvoiceMenu, setInvoice } from "../../store/invoicesSlice";
import { RootState } from "../../store/store";
import GoBackButton from "../GoBackButton";
import Actions from "./Actions/index";
import ItemList from "./items/ItemList";
import BillFrom from "./sections/BillFrom";
import BillTo from "./sections/BillTo";
import InvoiceInfo from "./sections/InvoiceInfo";

type Props = {};

interface FormValues extends Omit<Invoice, "_id" | "code" | "paymentDue"> {}

const InvoiceMenu = (props: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isEditing = router.pathname === "/[code]";

  const isMenuOpen = useSelector(
    (state: RootState) => state.invoices.isInvoiceMenuOpen
  );
  const currentInvoice = useSelector(
    (state: RootState) => state.invoices.currentInvoice
  );

  const handleClose = () => {
    dispatch(closeInvoiceMenu());
  };

  const defaultValues = useRef<FormValues>({
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
    createdAt: new Date().toISOString(),
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
  });

  useEffect(() => {
    if (isEditing && currentInvoice) {
      defaultValues.current = currentInvoice
    }
  }, [isEditing, currentInvoice]);

  const handleSubmit = async (formValues: FormValues) => {
    const transformItemsValues = (items: Item[]) => {
      formValues.total = 0;
      items.forEach((item) => {
        item.price = Number(item.price);
        item.quantity = Number(item.quantity);
        formValues.total += item.price * item.quantity;
      });
    };

    const refetch = () => {
      router.replace(router.asPath);
    };

    try {
      transformItemsValues(formValues.items);
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const url = isEditing
        ? `${baseUrl}/invoices/${currentInvoice?.code}`
        : `${baseUrl}/invoices`;

      const method = isEditing ? "patch" : "post";

      const response = await axios[method](url, formValues);
      const invoice = response.data;

      const message = isEditing
        ? "Invoice updated successfully"
        : "Invoice created successfully with code: ";

      toast.success(
        <Typography>
          {message}
          {!isEditing && (
            <Typography component="span" fontWeight="bold">
              #{invoice.code}
            </Typography>
          )}
        </Typography>
      );
      refetch();
      handleClose();
      if (isEditing) {
        dispatch(setInvoice(invoice));
      }
    } catch (error) {
      toast.error(
        `Error ${isEditing ? "editing" : "creating"} invoice, try again later`
      );
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
        {isEditing ? "Edit" : "New"} Invoice
      </Typography>
      {((isEditing && currentInvoice) || !isEditing) && (
        <FormContainer
          defaultValues={defaultValues.current}
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
      )}
    </Drawer>
  );
};

export default InvoiceMenu;
