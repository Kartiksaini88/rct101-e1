import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";


const Task = ({e , deletetodo}) => {
  // NOTE: do not delete `data-cy` key value pair

let [check , setcheck] = useState(e.done)


  return (
    <li data-cy="task" className={styles.task}>
      <input checked={check==true? 1 : 0} type="checkbox" data-cy="task-checkbox" onClick={()=>{
        
        setcheck(!check)
      }} />
      <div className={check === true? styles.underline :""}  data-cy="task-text">
        {e.text}
      </div>
      {/* Counter here */}
      <Counter e={e}></Counter>
      
      <button data-cy="task-remove-button" onClick={()=>{
        deletetodo(e.text)
      }}>X</button>
    </li>
  );
};

export default Task;
