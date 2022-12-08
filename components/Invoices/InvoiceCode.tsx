import { Typography } from "@mui/material";

type Props = {
  children: string;
};

const InvoiceCode = ({ children }: Props) => {
  return (
    <Typography variant="body1" fontWeight="bold" textTransform="uppercase">
      <Typography component="span" sx={{ color: "#7E88C3" }}>
        #
      </Typography>
      {children}
    </Typography>
  );
};

export default InvoiceCode;
