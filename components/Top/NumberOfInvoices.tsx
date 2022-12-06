import { Stack, Theme, Typography, useMediaQuery } from "@mui/material";

type Props = {
  number: number;
};

const NumberOfInvoices = ({ number }: Props) => {
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  let content: string;

  if (number === 1) {
    content = isTablet ? "There is  1 invoice" : "1 invoice";
  } else {
    content = isTablet ? `There are ${number} invoices` : `${number} invoices`;
  }

  return (
    <Stack>
      <Typography
        fontWeight="bold"
        sx={{ fontSize: { xs: "1.25rem", sm: "2rem" } }}
      >
        Invoices
      </Typography>
      <Typography sx={{ fontSize: "0.75rem" }}>
        {content}
      </Typography>
    </Stack>
  );
};

export default NumberOfInvoices;
