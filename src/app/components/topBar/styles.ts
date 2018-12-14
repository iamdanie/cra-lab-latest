import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { colors } from '@app/styles/globals';

export default (theme: Theme) => ({
  title: {
    flexGrow: 1,
    paddingLeft: 10
  },
  fabButton: {
    position: 'relative' as 'relative',
    top: 30,
    left: 0,
    right: 0,
    margin: '0 auto'
  },
  toolBar: {
    boxShadow: '0 3px 5px 2px #D1C4E9',
    background: `linear-gradient(45deg, ${colors.purplePrimary} 30%, ${
      colors.purpleSecondary
    } 60%)`
  }
});
