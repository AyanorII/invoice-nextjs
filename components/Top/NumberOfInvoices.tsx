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
        variant="h4"
      >
        Invoices
      </Typography>
      <Typography variant="body1">
        {content}
      </Typography>
    </Stack>
  );
};

export default NumberOfInvoices;
