import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    background?: {
      main?: string;
      light?: string;
      dark?: string;
    };
    paid?: {
      main?: string;
      background?: string;
    }
    pending?: {
      main?: string;
      background?: string;
    }
    draft?: {
      main?: string;
      background?: string;
    }
  }
}

declare module "@mui/material" {
  export interface ButtonPropsColorOverrides {
    paid: true;
    pending: true;
    draft: true;
  }
}
