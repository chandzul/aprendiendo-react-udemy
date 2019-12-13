import React, {Component} from 'react'

class App extends Component {
    constructor (props) {
        console.log('constructor')
        super(props)
        this.state = {mensaje: 'mensaje inicial'}
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    render () {
        console.log('render')
        return 'soy el metodo render'
    }
}

export default App;

// el metodo render 