import './App.css'
import { Header } from './componentes/Header'
import {Tareas} from './Data.js'
import {TaskList} from './componentes/TaskList'

export default function App() {
  return (
    <div className="container">
      <Header title={"Todo App"} />
      <TaskList tasks={Tareas}/>
    </div>
  )
}
