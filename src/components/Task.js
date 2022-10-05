import React from "react";

function Task({taskText,taskCategory,deletedTask}) {
  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button onClick={()=>deletedTask(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
