import MoonIcon from "@mui/icons-material/Brightness2";
import SunIcon from "@mui/icons-material/WbSunny";
import { IconButton, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TEXT_COLOR } from "../../lib/constants";
import { RootState } from "../../store/store";
import { toggleMode } from "../../store/themeSlice";

type Props = {};

const ThemeTogglerButton = (props: Props) => {
  const dispatch = useDispatch();

  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const toggleThemeMode = () => {
    dispatch(toggleMode());
  };

  return (
    <Stack
      flexGrow={1}
      paddingRight={{ xs: 2, lg: 0 }}
      paddingBottom={{ lg: 2 }}
    >
      <IconButton
        aria-label="toggle-theme"
        onClick={toggleThemeMode}
        sx={{
          marginLeft: "auto",
          marginTop: "auto",
          color: TEXT_COLOR.dark.secondary,
        }}
      >
        {themeMode === "light" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Stack>
  );
};

export default ThemeTogglerButton;
