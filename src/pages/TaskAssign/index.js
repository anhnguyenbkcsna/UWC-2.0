import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Collectors } from '../../components/TaskAssign/Collectors';
import { Janitors } from '../../components/TaskAssign/Janitors';
import TaskRoutes from '../../components/TaskAssign/TaskRoutes';
const useStyles = makeStyles(() => ({
  container: {
    padding: '10px',
    maxWidth: '1300px',
    height: '650px',
    backgroundColor: '#ffffff',
    // border: "1px solid black",
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    verticalAlign: 'middle',
  },
  title: {
    paddingRight: '10px',
  },
  components: {
    border: "1px solid black",
    height: '650px',
    borderRadius: '25px',
    boxShadow: "5px 5px 25px 10px rgba(0, 0, 0, 0.1)",
    padding: '25px',
  }
}))
const TaskAssign = () => {
  const styles = useStyles();
  const [page, setPage] = useState('mcp'); // mcp, assign, routes, map,
  const [employee, setEmployee] = useState("")
  const employeeList = ['Collectors', 'Janitors']
  const handleChange = (event) => {
    setEmployee(event.target.value);
  };
  return (
    <div className={styles.container}>
      {/* Assign task */}
      <>
        <div className={styles.header}>
          <h3 className={styles.title}>Loại hình nhân viên: </h3>
          <FormControl>
            <InputLabel id='chooseEmployee'>Employee</InputLabel>
            <Select
              id='chooseEmployee'
              value={employee}
              label="Employee"
              onChange={handleChange}          
              sx={{
                borderRadius: "25px", 
                width: "250px", 
                height: "50px"
              }}
            >
              {employeeList.map((employee) => <MenuItem value={`${employee}`}>{employee}</MenuItem>)}
            </Select>
          </FormControl>
        </div>

        {/* Component Assign Page */}
        <div className={styles.components}>
          {employee === 'Collectors' && <Collectors/>}
          {employee === 'Janitors'   && <Janitors/>}
        </div>
      </>
      {/* Routess */}
      <TaskRoutes />
    </div>
  )
}
export default TaskAssign