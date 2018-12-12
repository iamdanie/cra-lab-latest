import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import withTheme, { styles } from './withTheme';
import TopBar from '@app/components/topBar/topBar';

type State = {
  open: boolean;
};

class Index extends React.Component<WithStyles<typeof styles>, State> {
  state = {
    open: false
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <TopBar title={'Contact List'} />
      </div>
    );
  }
}

export default withTheme(withStyles(styles)(Index));