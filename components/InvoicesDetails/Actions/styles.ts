import { SxProps, Theme } from '@mui/material';

export const modalStyles: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: (theme: Theme) => ({
    xs: "90%",
    sm: 450,
  }),
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const buttonStyles: SxProps = {
  padding: "0.75rem 1rem",
};
