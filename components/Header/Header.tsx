import { Stack } from "@mui/material";
import { BACKGROUND_COLOR } from "../../lib/constants";
import AvatarContainer from "./AvatarContainer";
import Logo from "./Logo";
import ThemeTogglerButton from "./ThemeTogglerButton";

const Header = () => {
  return (
    <Stack
      flexDirection={{ xs: "row", lg: "column" }}
      alignItems="center"
      sx={{
        bgcolor: BACKGROUND_COLOR.dark.paper,
        borderTopRightRadius: { lg: "20px" },
        position: { lg: "sticky" },
        top: 0,
      }}
    >
      <Logo />
      <ThemeTogglerButton />
      <AvatarContainer />
    </Stack>
  );
};

export default Header;
