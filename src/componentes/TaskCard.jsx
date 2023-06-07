export const TaskCard=({taskName,onCheckInput,IsDoneTask})=>{
  /* creo una funcion que le asignare a un evento onChange del input*/
  const handleClickInput=()=>{
    onCheckInput(taskName)
  } 
  return(
    <div>
      <li className="tl-body-li">
      <input 
        type="checkbox" 
        className="checkbox"
        checked={IsDoneTask}
        onChange={handleClickInput} />
      <span 
        className="tl-body-span"
        style={{textDecoration:IsDoneTask?"line-through":"none"}}>
          {taskName}</span>
      <button className="boton-i edit"><i className="fa-solid fa-pen-to-square"></i></button>
      <button className="boton-i trash"><i className="fas fa-trash"></i></button>
      </li>
      
    </div>
  )
}