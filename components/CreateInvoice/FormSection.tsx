import { Grid, SxProps, Theme, Typography } from '@mui/material';
import React from "react";

type Props = {
  children: React.ReactNode;
  sectionHeading?: string;
  sx?: SxProps<Theme> | ((theme: Theme) => SxProps)
};

const FormSection = ({ children, sectionHeading, sx }: Props) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        "& > div": { width: "100%" },
        "& > div:nth-of-type(2)": sectionHeading
          ? { paddingTop: "8px !important" }
          : {},
        "& > div:nth-of-type(1)": sectionHeading
          ? {}
          : { paddingTop: "8px !important" },
        ...sx
      }}
    >
      {sectionHeading && (
        <Grid item xs={12}>
          <SectionHeading>{sectionHeading}</SectionHeading>
        </Grid>
      )}
      {children}
    </Grid>
  );
};

export default FormSection;

const SectionHeading = ({ children }: Pick<Props, "children">) => {
  return (
    <Typography color="primary" fontWeight="bold" variant="body1">
      {children}
    </Typography>
  );
};
