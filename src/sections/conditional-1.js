import React, { Component } from 'react';

class ComponentA extends Component {
    render () {
        return <p>Componente A</p>
    }
}

class ComponentB extends Component {
    render () {
        return <p>Componente B</p>
    }
}

function useConditionalRendering (mostrarA) {
    if (mostrarA) {
        return <ComponentA />
    } else {
        return <ComponentB />
    }
}

export default class ConditionalSection extends Component {

    constructor() {
        super()
        this.state = { mostrarA: false }
    }

    render () {
        // const conditionalComponent = useConditionalRendering(this.state.mostrarA)
        const conditionalComponent = this.state.mostrarA 
            ? <ComponentA /> 
            : <ComponentB />
        ;

        return (
            <div>
                <h4>Conditional Rendering</h4>
                {/* {useConditionalRendering(this.state.mostrarA)} */}
                {/* {conditionalComponent} */}
                {this.state.mostrarA
                    ? <ComponentA /> 
                    : <ComponentB />
                }
            </div>
        )
    }
}