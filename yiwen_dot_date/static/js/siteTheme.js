import { createMuiTheme } from 'material-ui/styles';

const site_theme = {
  palette: {
    primary: {
      main: '#f48fb1',
      light: '#ffc1e3',
      dark: '#bf5f82',
      contrastText: '#ad1457',
    },
    secondary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#e0f7fa',
    },
  },
};

export default function () {
    return createMuiTheme(site_theme);
};
