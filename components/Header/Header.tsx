import { Stack } from "@mui/material";
import { BACKGROUND_COLOR } from "../../lib/constants";
import AvatarContainer from "./AvatarContainer";
import Logo from "./Logo";
import ThemeTogglerButton from "./ThemeTogglerButton";

type Props = {};

const Header = ({}: Props) => {
  return (
    <Stack
      height={{ lg: "100%" }}
      flexDirection={{ xs: "row", lg: "column" }}
      alignItems="center"
      sx={{
        bgcolor: BACKGROUND_COLOR.dark.paper,
        borderTopRightRadius: { lg: "20px" },
      }}
    >
      <Logo />
      <ThemeTogglerButton />
      <AvatarContainer />
    </Stack>
  );
};

export default Header;
