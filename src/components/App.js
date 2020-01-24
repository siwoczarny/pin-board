import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import '../styles/App.scss';

class App extends Component {

  counter = 6
  state = { 
    tasks: []
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
    console.log("change w stanie elementu o id " + id);

    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false ;
        task.finishDate = new Date().getTime();
      }
    })

    this.setState({
      tasks
    })
    console.log(tasks)
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, //1 input
      date, //2 input
      important, //3 input
      active: true,
      finishDate: true
    }
    this.counter++
    console.log(task, this.counter)
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
      
    }))
    return true
  }

  render() { 
    return ( 
      <div className="App">
        <header>
          <h1>Lista "do zrobienia"</h1>
          <h2>Przypomni o wszystkim</h2>
        </header>
        <hr />
        <AddTask add={this.addTask} />
        <hr />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}
 
export default App;