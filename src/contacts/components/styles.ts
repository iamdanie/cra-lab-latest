import { Theme } from '@material-ui/core/styles/createMuiTheme';

export default (theme: Theme) => ({
  layout: {
    padding: 25
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});
