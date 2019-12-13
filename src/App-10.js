import React, { Component as compont } from 'react'; // asingnamos un nombre diferente a component

class App extends compont {

    constructor () {
        super();
        this.state = { mouseX: 0, mouseY: 0 };
        // this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove = (e) => {
        let { clientX, clientY:cliy } = e; // asiganamos un nombre diferente a clientY
        this.setState({ mouseX: clientX, mouseY: cliy });
    }

    handleClick(e){
        alert('Hi there');
    }

    render () {
        return (
            <div className='App'>
                <h4>Eventos</h4>
                <button onClick={this.handleClick}>Hi there</button>
                <div
                    onMouseMove={this.handleMouseMove}
                    style={{ border: '1px solid gray', marginTop: 10, padding:10 }}
                >
                    <p>
                        {this.state.mouseX}, {this.state.mouseY}
                    </p>
                </div>
            </div>
        );
    }
}

export default App;

// eventos sinteticos