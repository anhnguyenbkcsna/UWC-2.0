import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
  container: {},
}))
export const Janitors = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Janitors Assign
    </div>
  )
}