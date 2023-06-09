import { TaskCard } from './TaskCard';
import { useState,useEffect } from 'react';

export const TaskList = (props) => {
  const { tasks } = props;
  /*creo un arreglo vacio para almacenar cada vez que se da por completada o no una tarea */
  const[tarea,setTarea]=useState([]);
  /* este useState lo uso para ver cuando cambia el estado de string vacio en el input a otra cosa */
  const[caputurarValor,setCapturarValor]=useState('');
  /* funcion agregar elemento*/
  const[agregarValor,setAgregarValor]=useState(tasks)

  let incrementarId=4;
  const agregarTarea=()=>{
    if(caputurarValor=="" || caputurarValor==" " || caputurarValor=="  "){
      alert("verifique")
    }else{
      let newTareas={taskName:caputurarValor,id:incrementarId+1}
      setAgregarValor([...agregarValor,newTareas])
      setCapturarValor('');
    }
    /* let newTareas={taskName:caputurarValor,id:incrementarId+1}
    setAgregarValor([...agregarValor,newTareas])
    console.log(agregarValor) */
  }
  /*esta funcion es para marcar la tarea como hecha */
  const handleVerifiedCheckbox=(taskName)=>{
    /* verifico si la tarea esta  o no incluida en el array tarea */
    const tareaIndex=tarea.findIndex(tarea=>tarea.taskName===taskName);
    let newTareas=[...tarea];

    if(tareaIndex===-1){
      /*si no esta incluida quiero que me la incluyas al dar click por eso uso setTarea */
      newTareas.push({taskName:taskName,checked:true})
    }else{
      /* si ya esta marcada y no la he terminado a traves de filter quiero que la quite */
      newTareas[tareaIndex].checked=!newTareas[tareaIndex].checked;
    }
    setTarea(newTareas)
    localStorage.setItem('tareas',JSON.stringify(newTareas));
    
  }
  useEffect(()=>{
    const localStorageData=localStorage.getItem('tareas');
    const taskData=JSON.parse(localStorageData);
    setTarea(taskData);
  },[])
  console.log(tarea);
  return (
    <>
    <div className='input-container'>
    <input  
        placeholder="Add your new todo" 
        id="MyInput"
        value={caputurarValor}
        onChange={(event)=>{
          setCapturarValor(event.target.value);
        }}
        />
        <span className="tl-Header-btn">
         <button 
          className="tl-Header-btn-2"
          onClick={agregarTarea}>+</button>
        </span>
    </div>
      {agregarValor.map((item) => {
        return (<div key={item.id}>
          <ul className="tl-body-ul">
            <TaskCard 
              taskName={item.taskName}
              onCheckInput={handleVerifiedCheckbox}
              IsDoneTask={tarea.some((t)=>t.taskName ===item.taskName && t.checked)}  />
          </ul>
        </div>
        );
      })}
    </>
  );
};
