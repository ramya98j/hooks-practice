import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React ,{ useState } from 'react';

const App =() =>{
  const[task,setTask]=useState('');
  const[tasks,setTasks]=useState([]);


  const addTask =()=>{
    setTasks([...tasks,task]);
    setTask('');
  }
  

  const deleteTask=(index)=>{
    var duplicatearray=[...tasks];
    duplicatearray.splice(index,1);
    setTasks(duplicatearray);
    

  }

  const list= tasks.map((obj,index)=>{

    return (
      <div className="row justify-content-center">
        <h1 className="col-md-6 text-left">{index+1}.{obj}</h1>
        <button className="btn btn-danger m-1" onClick={()=>{deleteTask(index)}}>Delete</button>
      </div>
    )

  })
  return (
    
      <div className="App">
        <h1>React Todo List</h1>
        <div className="row justify-content-center">
        <input style={{backgroundColor:'lightsalmon'}}type="text" 
        placeholder="Enter task" 
        className="form-control col-md-6 m-1" 
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={addTask} className="btn btn-primary col-md-1 m-1">Add</button>
        
        
        </div>
        {list}
        </div>

    
  
  );
};

export default App;
