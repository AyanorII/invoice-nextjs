import { Box, Button, SxProps, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { COLORS_MAP } from "../../lib/constants";
import { InvoiceStatus } from "../../lib/interfaces";
import { RootState } from "../../store/store";

type Props = {
  status: InvoiceStatus;
};

const StatusButton = ({ status }: Props) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const getColor = (type: "main" | "background") => {
    return status === InvoiceStatus.DRAFT
      ? COLORS_MAP[status][themeMode][type]
      : COLORS_MAP[status][type];
  };

  const buttonStyles: SxProps = {
    display: "flex",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize",
    paddingInline: 2,
    paddingBlock: 1,
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    overflow: "hidden",
    position: "relative",
    minWidth: "106px",
    "&:before": {
      content: "''",
      inset: 0,
      position: "absolute",
      opacity: 0.8,
      backgroundColor: getColor("background"),
    },
  };

  const typographyStyles: SxProps = {
    color: getColor("main"),
    position: "relative",
    zIndex: 1,
  };

  return (
    <Button sx={buttonStyles}>
      <Dot color={getColor("main")} />
      <Typography variant="body1" fontWeight="bold" sx={typographyStyles}>
        {status}
      </Typography>
    </Button>
  );
};

export default StatusButton;

type DotProps = {
  color: string;
};

const Dot = ({ color }: DotProps) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: "8px",
        height: "8px",
        borderRadius: "50%",
      }}
    />
  );
};
