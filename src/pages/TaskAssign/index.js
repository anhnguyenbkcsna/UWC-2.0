import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Collectors } from '../../components/TaskAssign/Collectors';
import { Janitors } from '../../components/TaskAssign/Janitors';
import TaskRoutes from '../../components/TaskAssign/TaskRoutes';
import { Button } from '@mui/material';
import './Button.css'
const useStyles = makeStyles(() => ({
  container: {
    padding: '10px',
    maxWidth: '1300px',
    height: '60%',
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
    position: "relative",
    marginTop: '20px',
    border: "1px solid black",
    height: '650px',
    borderRadius: '25px',
    boxShadow: "5px 5px 25px 10px rgba(0, 0, 0, 0.1)",
    padding: '25px',
  }
}))
const TaskAssign = () => {
  const styles = useStyles();
  const [page, setPage] = useState(1); // mcp, assign , routes, map,
  const [employee, setEmployee] = useState("")
  const employeeList = ['Collectors', 'Janitors']
  const handleChange = (event) => {
    setEmployee(event.target.value);
  };
  const handleChangePage = () => {
    setPage((prev) => prev+1)
    // setPage('routes')
  }
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
                width: "200px", 
                height: "50px"
              }}
            >
              {employeeList.map((employee) => <MenuItem value={`${employee}`}>{employee}</MenuItem>)}
            </Select>
          </FormControl>
        </div>

        {/* Component Assign Page */}
        <div className={styles.components}>
          {page === 0 && employee === 'Collectors' && <Collectors/>}
          {page === 1 && employee === 'Collectors' && <Collectors/>}
          {page === 1 && employee === 'Janitors'   && <Janitors/>}
          {page === 2 && <TaskRoutes />}

          <div class="confirmBtn">
            <button class="confirm" href="" onClick={handleChangePage}>Xác nhận</button>
          </div>
        </div>
      </>

    </div>
  )
}
export default TaskAssign