import { Typography } from "@mui/material";
import { getFormattedDate } from "../../lib/helpers";

type Props = { label: string; date: Date };

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
        {getFormattedDate(date)}
      </Typography>
    </div>
  );
};

export default DateInfo;
