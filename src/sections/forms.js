import React, { Component } from 'react';

class Forms extends Component {

    constructor () {
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

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
        // let name = this.inputName.value;
        // let email = document.getElementById('twitter').value;
        // let terms = document.getElementById('terms').checked;
        // console.log({name, email, terms});
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handleChange: ' + e.target.checked)
        this.setState({ inputTerms: e.target.checked })
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
                            onChange={e => this.setState({ inputName: e.target.value})}
                            placeholder='Introduce el nombre'
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName}
                        />
                    </p>
                    <p>
                        <label htmlFor='twitter'>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            onChange={e => this.setState({ inputTwitter: e.target.value})}
                            placeholder='introduce tu Twitter'
                            value={this.state.inputTwitter}
                        />
                    </p>
                    <p>
                        <label>
                            <input 
                            id='terms'
                            checked={this.state.inputTerms}
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

// Componentes controlados