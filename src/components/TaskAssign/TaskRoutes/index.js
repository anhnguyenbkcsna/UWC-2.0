import React from 'react'
import { makeStyles } from '@mui/styles';
import TaskRoute from './TaskRoute'

const useStyles = makeStyles(() => ({
  container: {
    padding: '20px',
  },
  taskroute: {
    margin: '20px'
  },
}))
const TaskRoutes = () => {
  const styles = useStyles()
  let routeList = [
    {taskID: 'R11A', routeName: 'Route A', status: 'success'},
    {taskID: 'R11B', routeName: 'Route B', status: 'selected'},
    {taskID: 'R11C', routeName: 'Route C', status: 'failed'},
  ];
  return (
    <div className={styles.container}>
      {routeList.map((route, idx) => (
        <TaskRoute className={styles.taskroute} key={idx} taskID={route.taskID} routeName={route.routeName} status={route.status} />
      ))}
      {/* <TaskRoute taskID="R11A" routeName={routeList[1].routeName} status={routeList[1].status} /> */}

    </div>
  )
}
export default TaskRoutes;