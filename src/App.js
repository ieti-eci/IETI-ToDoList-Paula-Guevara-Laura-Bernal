import logo from './logo.svg';
import './App.css';

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
export default App;
