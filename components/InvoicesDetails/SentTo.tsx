import { Typography } from "@mui/material";

type Props = {
  email: string;
};

const SentTo = ({ email }: Props) => {
  return (
    <div>
      <Typography color="text.secondary" gutterBottom>
        Sent To
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {email}
      </Typography>
    </div>
  );
};

export default SentTo;
