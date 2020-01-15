import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  state = { 
    tasks: [
      {
        id: 0,
        text: 'zagrać Schumanna',
        date: '2020-06-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'kupić kwiaty Werci',
        date: '2020-02-14',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'umówić sylwestra',
        date: '2020-12-31',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'zjeść obiad',
        date: '2020-01-16',
        important: true,
        active: true,
        finishDate: null
      },
    ]
   }

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
  }

  changeTaskStatus = (id) => {
    console.log("chcnge w stanie elementu o id " + id);
  }


  render() { 
    return ( 
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}
 
export default App;