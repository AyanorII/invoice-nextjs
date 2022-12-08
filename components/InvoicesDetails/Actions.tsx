import { Button, Stack, SxProps } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = {};

const Actions = (props: Props) => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent={{xs: "center", sm: "end"}}
      gap={2}
    >
      <EditButton />
      <DeleteButton />
      <MarkAsPaidButton />
    </Stack>
  );
};

export default Actions;

const buttonStyles: SxProps = {
  padding: "0.75rem 1rem"
}

const EditButton = () => {
  // TODO: Implement functionality
  const themeMode = useSelector((state: RootState) => state.theme.mode)

  const styles: SxProps = {
    ...buttonStyles,
    backgroundColor: themeMode === "light" ? "#F8F8FB" : "#252945",
    color: themeMode === "light" ? "#7E88C3" : "#DFE3FA",
    "&:hover": {
      backgroundColor: themeMode === "light" ? "#DFE3FA" : "#F8F8FB",
      color: themeMode === "light" ? "#7E88C3" : "#252945",
    },
  };

  return (
    <Button variant="contained" sx={styles}>
      Edit
    </Button>
  );
};

const DeleteButton = () => {
  // TODO: Implement functionality
  return (
    <Button variant="contained" color="error" sx={{...buttonStyles}}>
      Delete
    </Button>
  );
};

const MarkAsPaidButton = () => {
  // TODO: Implement functionality
  return (
    <Button variant="contained" color="primary" sx={{...buttonStyles}}>
      Mark as Paid
    </Button>
  );
};
