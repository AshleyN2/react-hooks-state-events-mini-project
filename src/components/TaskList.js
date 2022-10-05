import React from "react";
import Task from "./Task";

function TaskList({tasks,deletedTask}) {
  /* displays a list of tasks using Task component */
  return (
    <div className="tasks">
      {tasks.map((task,index)=>(
        <Task deletedTask={deletedTask} key={index} text={task.text} category={task.category}/>
      ))}
    </div>
  );
}

export default TaskList;
