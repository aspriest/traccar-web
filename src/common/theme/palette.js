import { grey, green, indigo } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? "#C5C6C7" : "#C5C6C7",
  },
  primary: {
    main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? indigo[200] : indigo[900]),
  },
  secondary: {
    main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? green[200] : green[800]),
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: '#3bb2d0',
  },
  brandDarkBlue: {
    main: "#0E2A44"
  },
  brandLightBlue: {
    main: "#37B5FF"
  },
  brandYellow: {
    main: "#FFDE59"
  },
  brandRed: {
    main: "#FF5757"
  }
});
