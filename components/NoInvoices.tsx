import { Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

type Props = {};

const NoInvoices = (props: Props) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const width = isMobile ? 194 : 242;
  const height = isMobile ? 160 : 200;

  return (
    <Stack
      alignItems="center"
      margin="15vh auto 0"
      textAlign="center"
      maxWidth={isMobile ? "350px" : "450px"}
      gap={3}
    >
      <Image
        src="/illustration-empty.svg"
        alt="no invoices"
        width={width}
        height={height}
      />
      <Typography variant="h3" fontWeight="bold">
        There is nothing here
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Create an invoice by clicking the <strong>New</strong> button and get started
      </Typography>
    </Stack>
  );
};

export default NoInvoices;
