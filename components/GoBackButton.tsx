import LeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

type Props = {
  href?: string;
  onClick?: () => void;
};

const GoBackButton = ({ href, onClick }: Props) => {
  return (
    <Button
      variant="text"
      href={href}
      startIcon={<LeftIcon color="primary" />}
      onClick={onClick}
      sx={{ color: "text.primary", paddingLeft: 0 }}
    >
      Go Back
    </Button>
  );
};

export default GoBackButton;
