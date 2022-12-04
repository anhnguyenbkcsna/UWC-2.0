import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '75px',
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    borderRadius: '25px',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: '#666363',    
    fontSize: '2em',
    fontWeight: 'bold',
  },
  selectedContainer: {
    width: '100%',
    height: '75px',
    display: 'grid',
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    borderRadius: '25px',
    backgroundColor: '#97E075',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
    fontSize: '2em',
    fontWeight: 'bold',
  },
}))
const TaskRoute = (props) => {
  const styles = useStyles()
  return (
    <>
      {console.log(props)}
      {props.status !== "selected" && (<div className={styles.container}>
          <p className={styles.text}>{props.taskID}</p>
          <p className={styles.text}>{props.routeName}</p>
          {props.status==="success" ? 
            <p className={styles.text} style={{color:"#3ADD7B"}}>
              {props.status}
            </p> : <p className={styles.text} style={{color: "#D94949"}}>
              {props.status}
            </p>
          }
          <p className={styles.text}>Show map</p>
        </div>)
      }
      {props.status === "selected" && (<div className={styles.selectedContainer}>
          <p className={styles.selectedText}>{props.taskID}</p>
          <p className={styles.selectedText}>{props.routeName}</p>
          <p className={styles.selectedText}>
            {/* sx={{textDecoration: "underline"}} */}
            {props.status}
          </p>
          <p className={styles.selectedText}>Show map</p>
          {/* <Link href="#" underline="hover">
            {'Show map'}
          </Link> */}
        </div>)
      }
    </>
  )
}
export default TaskRoute;