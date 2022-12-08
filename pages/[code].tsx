import { Box, Container, Theme, useMediaQuery } from "@mui/material";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import GoBackButton from "../components/GoBackButton";
import Actions from "../components/InvoicesDetails/Actions";
import Header from "../components/InvoicesDetails/Header";
import { Invoice } from "../lib/interfaces";

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
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box>
      <Container maxWidth="md" sx={{marginTop: 3}}>
        <GoBackButton href="/" />
        <Header invoice={invoice} />
      </Container>
      {isMobile && (
        <Box
          sx={{
            marginTop: 3,
            padding: 3,
            position: "absolute",
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
    </Box>
  );
};

export default InvoiceDetailsPage;
