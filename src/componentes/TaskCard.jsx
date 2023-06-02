export const TaskCard=({taskName,key})=>{
  return(
    <div>
      <li className="tl-body-li">
      <input type="checkbox" className="checkbox" />
      <span className="tl-body-span">{taskName}</span>
      <button className="boton-i edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button className="boton-i trash"><i className="fas fa-trash"></i></button>
      </li>
      
    </div>
  )
}