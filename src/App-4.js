import React, {Component} from 'react';
import './App.css';

class Contador extends Component {

    constructor () {
        super()
        this.state = { contador : 1 }
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1 }) 
        }, 1000)
    }

    render () {

        // const contador = 0;

        return <span>{ this.state.contador }</span>
    }
}

function App() {
    return (
        <div className='App'>
            <p>Primer Component State</p>
            <Contador/>
        </div>
    );
}

export default App;

//  informacion inmutable
// tratar como state
// y es asincrono