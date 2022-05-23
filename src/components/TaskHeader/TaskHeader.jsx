import React, { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({totalTask}) => {
  // sample values to be replaced
  

  let unCompletedTask = 3;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      TODO LIST
      <br/>
      <b data-cy="header-remaining-task">You have {unCompletedTask} of</b>
      <b data-cy="header-total-task"> {totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
