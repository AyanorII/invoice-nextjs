import { Box, Typography } from "@mui/material";

type Props = {
  email: string;
};

const SentTo = ({ email }: Props) => {
  return (
    <Box sx={{ overflowWrap: "break-word" }}>
      <Typography color="text.secondary" gutterBottom>
        Sent To
      </Typography>
      <Typography variant="h6" fontWeight="bold">
        {email}
      </Typography>
    </Box>
  );
};

export default SentTo;
