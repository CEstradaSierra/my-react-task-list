import { useEffect, useState } from 'react';
import { TaskCard } from './TaskCard';

export const TaskList = (props) => {
  const { tasks } = props;
  /*USO EL USEsTATE CON UN ARRAY VACIO */
  const[tareas,setTareas]=useState([]);
  /*CREO UNA FUNCION QUE PERMITA MARCAR LA TAREA COMO HECHA O NO*/ 
  const handleCheckTask=(taskName)=>{
    console.log(tareas);
    let newTareas = [...tareas];
    if(!tareas.includes(taskName)){
      /*uso el set para agregar dentro del array el taskName */
      newTareas=[...newTareas,taskName];
    }else{
      /*el filter lo que hace es eliminar la tarea del array al quitar el checkbox */
      newTareas=newTareas.filter((task)=>taskName!=task);
    }
    setTareas(newTareas);
    localStorage.setItem("tareas", JSON.stringify(newTareas));
  }
  //use effect para que cuando se renderice el componente me tenga los datos acutalziados
  useEffect(()=>{
    const localStoreageData=localStorage.getItem('tareas');
    const storedTareas=JSON.parse(localStoreageData);
    setTareas(storedTareas);
  },[])

  const handleClickDelete=(taskName)=>{
    console.log(tareas)
    const updatedTask=tareas.filter((task)=>taskName!=task)
    setTareas(updatedTask);

  } 

  const filteredTasks = tasks.filter((item) => tareas.includes(item.taskName));

  return (
    <>
      {filteredTasks.map((item) => {
        return (<div key={item.id}>
          <ul className="tl-body-ul">
            <TaskCard 
            taskName={item.taskName}
            onCheckTask={handleCheckTask}
            isDone={tareas.includes(item.taskName)}
            deleteTask={()=>handleClickDelete(item.taskName)}  
            />
          </ul>
        </div>
        );
      })}
    </>
  );
};
