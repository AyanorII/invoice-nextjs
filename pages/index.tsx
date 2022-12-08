import { Container } from "@mui/material";
import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { useDispatch } from "react-redux";
import InvoicesList from "../components/Invoices/InvoicesList";
import NoInvoices from "../components/NoInvoices";
import Top from "../components/Top";
import { Invoice } from "../lib/interfaces";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL!}/invoices`;
  const response = await axios.get(url);
  const invoices = response.data;

  return {
    props: {
      invoices,
    },
  };
};

type Props = {
  invoices: Invoice[];
};

const Home: NextPage<Props> = ({ invoices }) => {
  const dispatch = useDispatch();
  return (
    <Container
      maxWidth="md"
      sx={{ marginTop: { xs: 4, md: 7, lg: 9 }, flexGrow: 1 }}
    >
      <Top numberOfInvoices={invoices.length} />
      {invoices.length === 0 ? (
        <NoInvoices />
      ) : (
        <InvoicesList invoices={invoices} />
      )}
    </Container>
  );
};

export default Home;
