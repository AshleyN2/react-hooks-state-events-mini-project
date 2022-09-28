import React, {useState} from "react";

function NewTaskForm() {

  const [newFields, setNewFields]=useState({
    text:'',
    category:'Code'
  })
 
  function handleFields(e){
    const{name,value}=e.target
    setNewFields({...newFields,[name]:value})
    
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
