import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    border: '1px solid black',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  other: {
    border: '1px solid black',
    backgroundColor: 'green',
    padding: 10,
    textAlign: 'center',
  },
});

export default function MyStaticComponent(props) {
  const { className } = props;
  const classes = useStyles(props);
  return <div className={clsx(classes.root, className)}>
    <h1>
      {`I'm static. My background color should always be blue.`}
    </h1>
    <div className={classes.other}>
      My background color should always be green.
    </div>
  </div>;
}

MyStaticComponent.defaultProps = {
  className: '',
};

MyStaticComponent.propTypes = {
  className: PropTypes.string,
};
