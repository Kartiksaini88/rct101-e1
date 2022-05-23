import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({settxt}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  let [addtxt , setstate] = useState("")

  return (
    <div className={styles.todoForm}>
      <input  onChange={(e)=>{
        setstate(e.target.value)
      }} data-cy="add-task-input" type="text" />
      <button disabled={!addtxt}  data-cy="add-task-button" onClick={()=>{settxt(addtxt)}}>+</button>
    </div>
  );
};

export default AddTask;
