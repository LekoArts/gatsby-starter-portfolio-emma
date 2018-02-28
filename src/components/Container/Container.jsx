import React from 'react';
import cx from 'classnames';
import styles from './Container.module.scss';

const Container = props => {
  const { children } = props;
  const classes = cx(styles.container, { [styles.text]: props.text });
  return <div className={classes}>{children}</div>;
};

export default Container;
