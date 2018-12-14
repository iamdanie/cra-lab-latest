import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import DataTable from '@app/components/dataTable/dataTable';
import { Contact } from '../types';

type Props = {
  classes: any;
  contacts: Array<Contact>;
};

const ContactList = ({ classes, contacts, ...rest }: Props) => {
  const columns = [
    { headerName: 'Id', field: 'id' },
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Created At', field: 'createdAt' },
    { headerName: 'Updated At', field: 'updatedAt' }
  ];
  return (
    <div className={classes.layout}>
      <Typography variant="h5" component="h3">
        These are your contacts
      </Typography>
      <Typography component="p">
        In order to add a new one, click on the button at the top right corner.
      </Typography>
      <DataTable data={contacts} columns={columns} />
    </div>
  );
};

export default withStyles(styles)(ContactList);
