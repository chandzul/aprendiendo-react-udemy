import React, {Component} from 'react';
import './App.css';

class Contador extends Component {

    constructor (props) {
        super(props)
        this.state = { contador : this.props.contadorInicial }
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1 }) 
        }, 1000)
    }

    render () {
        return <ContadorNumero numero={this.state.contador} />
    }
}

Contador.defaultProps = {
    contadorInicial: 0
}

class ContadorNumero extends Component {
    render () {
        console.log('ContadorNumero render()');
        return <span>{ this.props.numero }</span>
    }
}

function App() {
    return (
        <div className='App'>
            <p>Primer Component State</p>
            <Contador contadorInicial={100}/>
        </div>
    );
}

export default App;

// pasar props por default a un constructor