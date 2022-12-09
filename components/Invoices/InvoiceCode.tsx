import { Typography } from "@mui/material";

type Props = {
  children: string;
  variant?: "h5" | "body1";
};

const InvoiceCode = ({ children, variant = "body1" }: Props) => {
  return (
    <Typography variant={variant} fontWeight="bold" textTransform="uppercase" >
      <Typography variant={variant} display="inline" sx={{ color: "#7E88C3" }}>
        #
      </Typography>
      {children}
    </Typography>
  );
};

export default InvoiceCode;
