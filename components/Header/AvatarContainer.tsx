import { Avatar, Stack } from "@mui/material";
import { TEXT_COLOR } from "../../lib/constants";

type Props = {};

const AvatarContainer = ({}: Props) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      padding={{ xs: "1.25rem", sm: "1.5rem", lg: "2rem" }}
      borderLeft={{
        xs: `1px solid ${TEXT_COLOR.dark.secondary}50`,
        lg: "none",
      }}
      borderTop={{
        xs: "none",
        lg: `1px solid ${TEXT_COLOR.dark.secondary}50`,
      }}
    >
      <Avatar
        alt="default avatar"
        src="/image-avatar.jpg"
        sx={{
          width: { xs: "2rem", lg: "2.5rem" },
          height: { xs: "2rem", lg: "2.5rem" },
        }}
      />
    </Stack>
  );
};

export default AvatarContainer;
