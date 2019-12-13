import React, {Component} from 'react'

class App extends Component {
    constructor (props) {
        console.log('constructor')
        super(props)
        this.state = { scroll: 0}
        // debugger
    }

    componentWillMount () {
        console.log('componentWillMount')
        // debugger
    }

    componentDidMount () {
        console.log('componentDidMount')
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY)
            this.setState({ scroll: window.scrollY })
        })
        // debugger
    }

    render () {
        console.log('render')
        // debugger
        // return 'soy el metodo render'
        return (
            <div>
                <h4>Ciclo de montaje componentDidMount</h4>
                <p>el scroll es { this.state.scroll}</p>
                <p>este componente nos muestra como usar el componentDidMount</p>
                <p>¡Garantía de 30 días! Queremos que adores cada curso que tomes en Udemy. Si no te convence alguno, tienes 30 días para devolverlo.</p>
                <p>¡Garantía de 30 días! Queremos que adores cada curso que tomes en Udemy. Si no te convence alguno, tienes 30 días para devolverlo.</p>
                <p>¡Garantía de 30 días! Queremos que adores cada curso que tomes en Udemy. Si no te convence alguno, tienes 30 días para devolverlo.</p>
                <p>¡Garantía de 30 días! Queremos que adores cada curso que tomes en Udemy. Si no te convence alguno, tienes 30 días para devolverlo.</p>
                <p>¡Garantía de 30 días! Queremos que adores cada curso que tomes en Udemy. Si no te convence alguno, tienes 30 días para devolverlo.</p>
                <p>¡Garantía de 30 días! Queremos que adores cada curso que tomes en Udemy. Si no te convence alguno, tienes 30 días para devolverlo.</p>
                <p>¡Garantía de 30 días! Queremos que adores cada curso que tomes en Udemy. Si no te convence alguno, tienes 30 días para devolverlo.</p>
            </div>
        )
    }
}

export default App;

// el metodo render 