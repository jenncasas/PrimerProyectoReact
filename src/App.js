import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import tasks from './sample/tasks.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Post from './components/Post';

class App extends Component{

  state ={
    task: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.task.length
    }
    this.setState({
      task:[ //Agregar un nuevo elemento a la tarea (arreglo) actual
        ...this.state.task, //todo lo guardado actaulemente en las tareas
        newTask
      ]
    })
    // console.log(newTask);
  }

  deleteTask = (id) => {
    const dltTask = this.state.task.filter(task => task.id !== id);
    this.setState({task:dltTask});
  }

  checkTask = id => {
    const checkState = this.state.task.map(task => {
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    });
    this.setState({tasks: checkState});
  }

  render(){
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Post</Link>
      <Route exact path="/" render={() => {
       return <div>
        <TaskForm addTask={this.addTask}/>
        <Tasks tasks={this.state.task} deleteTask={this.deleteTask} checkDone={this.checkTask}/>
      </div> 
      }}>
      </Route>
      <Route path="/posts" component={Post}/>
      </Router>
    </div>
  }
}

export default App;
