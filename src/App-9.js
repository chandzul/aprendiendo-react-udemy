import React, {Component} from 'react';
import cars from './data/cars.json';
// import './App.css'

class CarItem extends Component {
    render () {
        const { car } = this.props
        return (
            <li>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>
            </li>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <h4>Trabajando con listas de objetos</h4>
            <ul>
                {
                    cars.map(
                        car => {
                            return <CarItem key={car.id} car={car}/>
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default App;

// trabajamos con objetos