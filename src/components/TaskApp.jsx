import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import task_data from "../data/tasks.json"
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [txt , settxt] = useState(task_data)
  let [totalTask,settotal] = useState(txt.length);
  let [uncompletedtask , setask] = useState(task_data)
   console.log(uncompletedtask)


   let handletxt = (todo)=>{
    
    let payload={
      text:todo,
      count:1,
      done:false,
    
  }
       
     settxt([...txt , payload])
     settotal(totalTask+1)
   }  
 
   let deletetodo = (value)=>{
     settxt(txt.filter((e)=>e.text!==value))
     settotal(totalTask-1)
   }
 
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader totalTask={totalTask}></TaskHeader>
      {/* Add Task */}
      <AddTask txt={txt} settxt={handletxt}></AddTask>
      {/* Tasks */}
      <Tasks totalTask={totalTask} task_data={txt} deletetodo={deletetodo}></Tasks>
    </div>
  );
};

export default TaskApp;
