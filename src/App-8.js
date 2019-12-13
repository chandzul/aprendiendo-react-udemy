import React, {Components} from 'react';

import './App.css'

function App() {
    const numbers = [1, 1, 3, 4, 5];
    return (
        <div className='App'>
            <h4>Trabajando con listas</h4>
            {
                numbers.map( (number, index) => { 
                        return <p key={index} >soy el numero {number}</p> 
                    }
                )
            }
        </div>
    );
}

export default App;

// trabajamos con listas