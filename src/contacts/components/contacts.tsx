import React, { Component } from 'react';
import ContactList from './contactList';
import { connect } from 'react-redux';
import { listContacts } from '../redux/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';

type Props = {
  contacts: any;
  listContacts: typeof listContacts;
};

class Contacts extends Component<Props> {
  componentDidMount() {
    const { listContacts } = this.props;

    listContacts();
  }
  render() {
    const {
      contacts: { isFetching, data, error }
    } = this.props;

    if (isFetching) {
      return <CircularProgress color="secondary" />;
    }

    if (error) {
      return <div>Error!</div>;
    }

    return <ContactList contacts={data || []} />;
  }
}

export default connect(
  (state: any) => ({ contacts: state.contacts }),
  { listContacts }
)(Contacts);
