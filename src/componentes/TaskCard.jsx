export const TaskCard=(props)=>{
  const{taskName,onCheckTask,isDone,deleteTask}=props;
  const handleClick=()=>{
    onCheckTask(taskName);
  }
  const handleDelete=()=>{
    deleteTask(taskName);
  }
  return(
    <div>
      <li className="tl-body-li">
      <input 
      type="checkbox" 
      className="checkbox"
      checked={isDone}
      onChange={handleClick} />
      <span className="tl-body-span" style={{textDecoration:isDone?"line-through":"none"}} >{taskName}</span>
      <button className="boton-i edit"><i className="fa-solid fa-pen-to-square"></i></button>
      <button className="boton-i trash" onClick={handleDelete} ><i className="fas fa-trash"></i></button>
      </li>
      
    </div>
  )
}