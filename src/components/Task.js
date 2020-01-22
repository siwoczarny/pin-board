import React from 'react';

const Task = (props) => {

    const style = {
        color: '#fa3232',
    }

    const { text, date, id, active, important, finishDate } = props.task;

    if(active) {
        return ( 
            <div className="task">
                <p>
                    <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span><br />
                    <button onClick={() => props.change(id)}> Zrobione!</button>
                    <button onClick={() => props.delete(id)}> Skasuj</button>
                </p>
                

            </div>
        );
    } else {

        const finish = new Date(finishDate).toISOString().slice(0, 10);
        return (
         <div className="task">
            <p>
                <strong>{text}</strong> - do <span>{date}</span><br />
                /wykonano <span>{finish}/</span><br />
                <button onClick={() => props.delete(id)}> Skasuj</button><br/>
            </p>
         </div>
        )
    }
};

export default Task;