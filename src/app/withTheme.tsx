import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import purple from '@material-ui/core/colors/purple';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: purple
  },
  typography: {
    useNextVariants: true
  }
});

function withTheme<P>(Component: React.ComponentType<P>) {
  function WithTheme(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithTheme;
}

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  });

export default withTheme;
