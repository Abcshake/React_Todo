import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    border: "5px",
    palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: purple[500],
    },
    typography: {
      fontSize: 20,
    },
  },
});

export default theme;