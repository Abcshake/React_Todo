import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    border: "5px",
    palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[500],
    },
    typography: {
      fontSize: 20,
    },
  },
});

export default theme;