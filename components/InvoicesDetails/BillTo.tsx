import { Typography } from "@mui/material";
import { Client } from "../../lib/interfaces";
import AddressInfo from "./AddressInfo";

type Props = {
  client: Client;
};

const BillTo = ({ client }: Props) => {
  const { name, address } = client;
  return (
    <div>
      <Typography color="text.secondary" gutterBottom>
        Bill To
      </Typography>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {name}
      </Typography>
      <AddressInfo address={address} />
    </div>
  );
};

export default BillTo;
