import React, {Component} from 'react';
import './AddTask.css';


class AddTask extends Component {
    
    minDate = new Date().toISOString().slice(0,10);
    state = { 
        text: '',
        checked: false,
        date: this.minDate
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    render() { 
        
        let maxDate = this.minDate.slice(0,4);
        maxDate = maxDate + "-12-31";
        return ( 
            <div className="form" >
                <input type="text" placeholder="Dodaj zadanie" value={this.state.text} />
                <input type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priorytet</label><br/>
                <label htmlFor="date">Czas wykonania</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/><br/>
                <button>Dodaj</button>
            </div>
         );
    }
}

export default AddTask;