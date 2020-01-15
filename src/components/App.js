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
    const tasks = [...this.state.tasks]; //dokładna kopia tablicy, która jest w state
    const index = tasks.findIndex(task => task.id === id); //znalezienie elementu, który pasuje do klikniętej pozycji
    tasks.splice(index, 1); //usuwanie znalezionego elementu

    this.setState({
      tasks
    })

    //DRUGA MOŻLIWOŚĆ Z METODĄ FILTRUJĄCĄ
    // let tasks = [...this.state.tasks];
    // tasks = tasks.filter(task => task.id !== id);

    // this.setState({
    //   tasks
    // })
  }

  changeTaskStatus = (id) => {
    console.log("chcnge w stanie elementu o id " + id);

    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        tasks.active = false ;
        tasks.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })
    console.log(tasks)
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