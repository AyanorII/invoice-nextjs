import { Stack, Theme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { PRIMARY_COLOR } from "../../lib/constants";

type Props = {};

const Logo = (props: Props) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  let logoWidth: number;
  let logoHeight: number;

  if (isMobile) {
    logoWidth = 28;
    logoHeight = 26;
  } else if (isDesktop) {
    logoWidth = 40;
    logoHeight = 37;
  } else {
    logoWidth = 31;
    logoHeight = 29;
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        borderTopRightRadius: "1.25rem",
        borderBottomRightRadius: "1.25rem",
        position: "relative",
        overflow: "hidden",
        background: PRIMARY_COLOR.main,
        width: { xs: "72px", sm: "80px", lg: "103px" },
        height: { xs: "72px", sm: "80px", lg: "103px" },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          top: "50%",
          left: 0,
          right: 0,
          borderTopLeftRadius: "20px",
          background: PRIMARY_COLOR.light,
        },
      }}
    >
      <Image
        src="/logo.svg"
        alt="logo"
        width={logoWidth}
        height={logoHeight}
        style={{ position: "relative", zIndex: 100 }}

      />
    </Stack>
  );
};

export default Logo;
