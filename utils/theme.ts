import { createTheme } from '@mui/material/styles';

export const colors = {

    dark:"#0000a9",
    main:"#0012dc",
    light:"#6744ff",

  
}


export const theme = createTheme({
    palette: {
      primary: {
        ...colors
      },

    },
  });

