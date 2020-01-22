import React from 'react';
import Task from './Task';
import "./TaskList.css";

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    
    if (active.length >= 2) {
        active.sort((x, y) => {

            x = x.important;
            y = y.important;

            if (x < y) {
                return 1
            }
            if (x > y) {
                return -1
            }
            return 0
        })
    }

    if (done.length >=2) {
        done.sort((x, y) => {
            if (x.finishDate < y.finishDate) {
                return 1
            }
            if (x.finishDate > y.finishDate) {
                return -1
            }
            return 0
        })

        // lub
        // done.sort((x,y) => b.finishdate - a.finishdate)
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);

    return ( 
        <div className="list">
            <div className="active" >
                <h3>Zadania do zrobienia [{active.length}]</h3>
                {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do zrobienia</p>}
            </div>
            <div className="done" >
                <h3>Zadania zrobione [{done.length}]</h3>
                {doneTasks}
            </div>
        </div>
     );
}
 
export default TaskList;