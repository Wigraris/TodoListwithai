import {useState} from 'react'
import {Todo} from './types'
import {TaskInput} from './components/TaskInput'
import {TaskList} from './components/TaskList'

function App(){
    const [tasks, setTasks] = useState<Todo[]>([]);

    const addTask = (text: string) => {
        const newTask: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        setTasks([...tasks,newTask]);
    };
    const toggleTask = (id: number) => {
        setTasks(tasks.map((task) =>
            task.id === id ? {...task,completed: !task.completed} : task
        ))
    };
    const deleteTask = (id:number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    return (
        <div className = "container">
            <h1>Task Traker</h1>
            <TaskInput onAdd={addTask} />
            <TaskList tasks = {tasks} onToggle={toggleTask} onDelete={deleteTask}/>
        </div>
    )
}
export default App;