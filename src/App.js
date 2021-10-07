
import { useState } from 'react';

function App() {
  const [ tasks, setTasks ] = useState([
    { isCompleted: false, taskName: 'learn React' }]);

  const [ texValue, setValue] = useState("");

  const createTask = (taskName) => {
    const newTask = {
      isCompleted: false,
      taskName: taskName,
    }
    setTasks([...tasks, newTask])
  } 

  const handleSubmit = (event) =>{
    event.preventDefault();
    createTask(texValue); 
  };

  const handleChange = (event)=>{
    const taskValue = event.target.value;
    setValue(taskValue);
  }

  return (
    <main>
			<form onSubmit={handleSubmit}>
				<input value={texValue} onChange={handleChange} type="text" placeholder="task name" />
				<button>Create Task</button>
			</form>
      <ul>
				{tasks.map((task, index) => {
					return (
						<span>class task item</span>
					);
				})}
			</ul>
		</main>
);
}

export default App;
