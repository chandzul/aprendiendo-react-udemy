import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',
    panda: 'https://goo.gl/oNbtoq'
}

class AnimalImage extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps')
        console.log(nextProps)
        // nextProps pueden ser las mismas props que tenemos
        // pero entrara igualmente a este metodo
        // nuevas props no quiere decri que sean distintas
        // a las que teniamos
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
        // if ( this.props.animal !== nextProps.animal) {
        //     console.log('setState?')
        //     this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
        // }
    }

    render () {
        console.log('-> render')
        return (
            <div>
                <p>Selected: { this.props.animal }</p>
                <img 
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
    animal: 'panda'
}

class EjemploDeCicloDeActualizacion extends Component {
    
    state = { animal: 'panda'}
    
    render () {
        return (
            <div>
                <h4>Ciclo de Actualizaion: ComponentWillReceiveProps</h4>
                <button onClick={() => this.setState({animal: 'cat'})}>
                    Cat
                </button>
                <button onClick={() => this.setState({animal: 'dolphin'})}>
                    Dolphin
                </button>
                <button onClick={() => this.setState({animal: 'panda'})}>
                    Panda
                </button>

                <AnimalImage animal={this.state.animal} />
            </div>
        )
    }
}

export default EjemploDeCicloDeActualizacion;


// ejemplo de componentWillReceiveProps
// este nos sirve cuadno queremos saber que dato de algun componente
// es que ha cambiado y ahcer los cambios en la vista