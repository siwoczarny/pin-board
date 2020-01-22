import React, {Component} from 'react';
import './AddTask.css';


class AddTask extends Component {
    
    currentDate = new Date().toLocaleDateString();
    minDate = new Date().toISOString().slice(0,10);
    state = { 
        text: '',
        checked: false,
        date: this.minDate
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    // contDate = new Date().toLocaleTimeString

    handleClick = () => {

        const {text, date, checked} = this.state;
        
        if(text.length >= 3) {
            const add = this.props.add(text, date, checked);
            
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate
                })
            }
        } else {
            alert("Nazwa zadania za krótka, wpisz minimum 3 znaki")
        }
    }

    render() { 
        
        let maxDate = this.minDate.slice(0,4);
        maxDate = maxDate + "-12-31";
        return ( 
            <div className="form" >
                <p>Dzisiejsza data: {this.currentDate}</p>
                <label htmlFor="text">Dodaj zadanie:</label><br/>
                <input type="text" placeholder="np. wynieść śmieci" value={this.state.text} onChange={this.handleText} /><br />
                <label htmlFor="important" id="important">Priorytet</label>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} id="important"/><br />
                <label htmlFor="date">Termin wykonania:</label><br />
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/><br/>
                <button onClick={this.handleClick}>Dodaj zadanie</button>
            </div>
         );
    }
}

export default AddTask;