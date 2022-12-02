import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(() => ({
  container: {},
}))
export const Collectors = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      Collector Assign
    </div>
  )
}