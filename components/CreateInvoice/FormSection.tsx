import { Grid, SxProps, Theme, Typography } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  sectionHeading?: string;
  sx?: SxProps<Theme> | ((theme: Theme) => SxProps);
};

const FormSection = ({ children, sectionHeading, sx }: Props) => {
  return (
    <div>
      {sectionHeading && <SectionHeading>{sectionHeading}</SectionHeading>}
      <Grid
        container
        spacing={3}
        sx={{
          "& > div": { width: "100%" },
          ...sx
        }}
      >
        {children}
      </Grid>
    </div>
  );
};

export default FormSection;

const SectionHeading = ({ children }: Pick<Props, "children">) => {
  return (
    <Typography color="primary" fontWeight="bold" variant="body1" marginBottom={1.75}>
      {children}
    </Typography>
  );
};
