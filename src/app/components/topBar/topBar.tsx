import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';

type Props = {
  classes: any;
  title: string;
};

const TopBar = ({ classes, title }: Props) => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <MenuIcon />
        <Typography variant="h6" color="inherit" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
