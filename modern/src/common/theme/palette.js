import {
  amber, grey, green, red, common,
} from '@mui/material/colors';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 2be3d72b9dcb7204a23ebfb6afee99ef90a22400
// const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

>>>>>>> d35f28e3 (fixed breaking change.)
export default (server) => {
  const colors = {
    white: common.white,
    background: grey[50],
    primary: '#0E2A44' /* server?.attributes?.colorPrimary || indigo[900] */,
    secondary: server?.attributes?.colorSecondary || green[800],
    positive: green[500],
    medium: amber[700],
    negative: red[500],
    neutral: grey[500],
    geometry: '#3bb2d0',
  };

  return {
    background: {
      default: colors.background,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    colors,
  };
};
