import { Box, Container, Theme, useMediaQuery } from "@mui/material";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GoBackButton from "../components/GoBackButton";
import Head from "../components/Head";
import Actions from "../components/InvoicesDetails/Actions";
import Header from "../components/InvoicesDetails/Header";
import Info from "../components/InvoicesDetails/Info";
import { Invoice } from "../lib/interfaces";
import { setInvoice } from "../store/invoicesSlice";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context!.params!.code;

  const url = `${process.env.NEXT_PUBLIC_API_URL}/invoices/${code}`;
  const response = await axios.get(url);
  const invoice = response.data;

  return {
    props: {
      invoice,
    },
  };
};

type Props = {
  invoice: Invoice;
};

const InvoiceDetailsPage: NextPage<Props> = ({ invoice }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInvoice(invoice));
  }, [invoice]);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <Head title={`Invoice #${invoice.code} | Invoice App | Ayanori Toyoda`} />
      <Container
        maxWidth="md"
        sx={{ marginBlock: { xs: "2rem 8rem", sm: "2rem 4rem" } }}
      >
        <GoBackButton href="/" />
        <Header invoice={invoice} />
        <Info />
      </Container>
      {isMobile && (
        <Box
          sx={{
            marginTop: 3,
            padding: 3,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            backgroundColor: (theme: Theme) => theme.palette.background.paper,
          }}
        >
          <Actions />
        </Box>
      )}
    </>
  );
};

export default InvoiceDetailsPage;
