import React, {Component} from 'react';

class Contador extends Component {

    constructor () {
        super()
        this.state = { contador : 1 }
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

// State 1: gestion de estado 