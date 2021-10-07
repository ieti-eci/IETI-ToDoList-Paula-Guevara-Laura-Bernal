import { TaskItem } from './TaskItem';
import { useState } from 'react';

function App() {
  const [ tasks, setTasks ] = useState([
    { isCompleted: false, taskName: 'task name' }]);

  const [textValue, setValue] = useState("");
}

  const handleChange = (event)=>{
    const textValue = event.target.value;
    setTasks(textValue);
  }
  
  const createTask = (name) => {
    const newTask = {
      isCompleted: false,
      name: name,
    }
    setTasks([...tasks, newTask])
  } 
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    createTask(textValue); 
  };

<main>
			<form onSubmit={handleSubmit}>
				<input value={textValue} onChange={handleChange} type="text" placeholder="task name" />
				<button>Create Task</button>
			</form>
      <ul>
				{tasks.map((task, index) => {
					return (
						<TaskItem
							isChecked={task.isCompleted}
							taskName={task.taskName}
						/>
					);
				})}
			</ul>
		</main>
