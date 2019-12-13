import React, { Component } from 'react';

class Forms extends Component {

    handleClick = (e) => {
        e.preventDefault();
        // let name = document.getElementById('name').value;
        let name = this.inputName.value;
        let email = document.getElementById('twitter').value;
        console.log({name, email});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // let name = document.getElementById('name').value;
        let name = this.inputName.value;
        let email = document.getElementById('twitter').value;
        let terms = document.getElementById('terms').checked;
        console.log({name, email, terms});
    }

    handleChange (e) {
        console.log('handleChange: ' + e.target.checked)
    }

    render () {
        return (
            <div>
                <h4>formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce el nombre'
                            ref={inputElement => this.inputName = inputElement}
                        />
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='introduce tu Twitter'
                        />
                    </p>
                    <p>
                        <label>
                            <input 
                            id='terms'
                            onChange={this.handleChange} 
                            type='checkbox' />
                            Accepted terms
                        </label>
                    </p>
                    {/* <button onClick={this.handleClick}>Enviar</button> */}
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}

export default Forms;

// usando formularios
// elemento ref
// elemento onsubmit