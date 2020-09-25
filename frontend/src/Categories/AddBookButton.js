import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em',
  },
};

const AddBookButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/book/create?categoryId=${record.id}`}
    label="Add an book"
    title="Add an book"
  />
);

export default withStyles(styles)(AddBookButton);
