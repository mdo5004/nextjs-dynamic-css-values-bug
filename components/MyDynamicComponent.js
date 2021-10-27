import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    border: '1px solid black',
    backgroundColor: ({ color }) => color,
    color: ({ color }) => color === 'blue' ? 'white' : 'black',
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

export default function MyDynamicComponent(props) {
  const { className } = props;
  const classes = useStyles(props);
  return <div className={clsx(classes.root, className)}>
    My background color should be {props.color}...
    <div className={classes.other}>
      My background color should always be green.
    </div>
  </div>;
}

MyDynamicComponent.defaultProps = {
  className: '',
};

MyDynamicComponent.propTypes = {
  className: PropTypes.string,
};
