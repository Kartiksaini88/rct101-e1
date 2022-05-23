import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({e}) => {
  // sample value to be replaced
  
  
  let[count , setcount ] = useState(e.count)

  let handlecounter = (value)=>{
   
     
        setcount(count+value)
      
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>{
        if(count==0){
          return
        }
        handlecounter(1)}}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>{
         if(count==1){
          return
        }
        handlecounter(-1)}}>-</button>
    </div>
  );
};

export default Counter;
