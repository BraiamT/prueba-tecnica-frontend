import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const coolThemeTest = createTheme({
  palette: {
    primary: {
      main: '#03506F',
    },
    secondary: {
      main: '#FFE3D8',
    },
    grey: {
      main: '#BBBBBB',
    },
    background: {
      main: '#0A043C',
    },
    error: {
      main: red.A400,
    },
  },
});

export default coolThemeTest;
