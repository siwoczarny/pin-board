import React from 'react';

const Task = (props) => {

    const style = {
        color: 'red',
    }

    const { text, date, id, active, important, finishDate } = props.task;

    if(active) {
        return ( 
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong><em> - do <span>{date} </span></em>
                    <button onClick={() => props.change(id)}> Zrobione!</button>
                    <button onClick={() => props.delete(id)}> Skasuj</button>
                </p>
                

            </div>
        );
    } else {

        const finish = new Date(finishDate).toISOString().slice(0, 10);
        return (
         <div>
            <p>
                <strong>{text}</strong><em> - do <span>{date} </span></em>
                <button onClick={() => props.delete(id)}> Skasuj</button><br/>
                /potwierdzenie wykonania <span>{finish}/</span>
            </p>
         </div>
        )
    }
};

export default Task;