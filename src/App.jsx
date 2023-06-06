import './App.css'
import { Header } from './componentes/Header'
import {Tareas} from './Data.js'
import {TaskList} from './componentes/TaskList'

export default function App() {
  return (
    <div className="container">
      <Header title={"Todo App"} />
      <input  placeholder="Add your new todo" id="MyInput"/>
      <span className="tl-Header-btn">
        <button className="tl-Header-btn-2">+</button>
      </span>
      <TaskList tasks={Tareas}/>
    </div>
  )
}
