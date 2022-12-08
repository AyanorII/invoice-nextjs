import ArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { getFormattedDate, getFormattedPrice } from "../../lib/helpers";
import { Invoice } from "../../lib/interfaces";
import InvoiceCode from "./InvoiceCode";
import StatusButton from "./StatusButton";

type Props = {
  invoice: Invoice;
};

const InvoiceCard = ({ invoice }: Props) => {
  const { code, client, status, total } = invoice;
  const paymentDue = getFormattedDate(invoice.paymentDue);

  const gridAreas = `"code       client"
                       "paymentDue status"
                       "total      status"`;

  return (
    <Card
      sx={{
        borderRadius: "8px",
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.025)",
        },
      }}
    >
      <Link href={`invoices/${code}`}>
        <CardContent sx={{ padding: 3 }}>
          <Grid
            container
            gap={{ sm: 1, md: 5 }}
            sx={{
              display: "grid",
              gridTemplateAreas: { xs: gridAreas, sm: "unset" },
              gridTemplateColumns: { sm: "auto 1fr 1fr 1fr 1fr auto" },
              alignItems: { sm: "center" },
            }}
          >
            {/* ---------------------------- Code ---------------------------- */}
            <Grid
              item
              mb={{ xs: 2, sm: 0 }}
              gridArea={{ xs: "code", sm: "unset" }}
              order={{ sm: 0 }}
            >
              <InvoiceCode>{code}</InvoiceCode>
            </Grid>
            {/* ---------------------------- Code ---------------------------- */}
            {/* --------------------------- Client --------------------------- */}
            <Grid
              item
              gridArea={{ xs: "client", sm: "unset" }}
              order={{ sm: 2 }}
            >
              <Typography
                color="text.secondary"
                textAlign={{ xs: "right", sm: "left" }}
                letterSpacing="0.25px"
              >
                {client.name}
              </Typography>
            </Grid>
            {/* --------------------------- Client --------------------------- */}
            {/* ------------------------- Payment Due ------------------------ */}
            <Grid
              item
              gridArea={{ xs: "paymentDue", sm: "unset" }}
              order={{ sm: 1 }}
            >
              <Typography color="text.secondary">Due {paymentDue}</Typography>
            </Grid>
            {/* ------------------------- Payment Due ------------------------ */}
            {/* ---------------------------- Total --------------------------- */}
            <Grid
              item
              gridArea={{ xs: "total", sm: "unset" }}
              order={{ sm: 3 }}
            >
              <Typography
                fontWeight="bold"
                variant="h5"
                textAlign={{ md: "right" }}
              >
                {getFormattedPrice(total)}
              </Typography>
            </Grid>
            {/* ---------------------------- Total --------------------------- */}
            {/* ---------------------------- Status -------------------------- */}
            <Grid
              item
              display="flex"
              justifyContent={{ xs: "end", sm: "center", md: "end" }}
              alignItems={{ xs: "end", sm: "unset" }}
              gridArea={{ xs: "status", sm: "unset" }}
              order={{ sm: 4 }}
            >
              <StatusButton status={status} />
            </Grid>
            {/* ---------------------------- Status -------------------------- */}
            {/* ---------------------------- Arrow --------------------------- */}
            <Grid item display={{ xs: "none", sm: "flex" }} order={{ sm: 4 }}>
              <ArrowRight color="primary" />
            </Grid>
            {/* ---------------------------- Arrow --------------------------- */}
          </Grid>
        </CardContent>
      </Link>
    </Card>
  );
};

export default InvoiceCard;
