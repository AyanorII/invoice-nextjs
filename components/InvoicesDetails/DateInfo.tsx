import { Typography } from "@mui/material";
import { getFormattedDate } from "../../lib/helpers";

type Props = { label: string; date: string };

const DateInfo = ({ label, date }: Props) => {
  return (
    <div>
      <Typography
        color="text.secondary"
        textTransform="capitalize"
        gutterBottom
      >
        {label}
      </Typography>
      <Typography variant="h5" textTransform="capitalize" fontWeight="bold">
        {getFormattedDate(new Date(date))}
      </Typography>
    </div>
  );
};

export default DateInfo;
