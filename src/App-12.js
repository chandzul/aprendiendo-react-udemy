import React, { Component } from 'react';

class Box extends Component {
    render () {
        return (
            <div style={{ border:'1px solid red', margin: 5, padding: 5}}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component {
    render () {
        return (
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.autor}</em></p>
                <Box>{this.props.date}</Box>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}

function App () {
    return (
        <div className='App'>
            <h4>Children props</h4>
            <Article 
                title='Articulo de como usar prop children' 
                autor='@chandzul' 
                date={new Date().toLocaleDateString()}>
                    Esto seria un texto largo lorem ipsum
            </Article>
            <Article 
                title='Articulo de como usar prop children' 
                autor='@chandzul' 
                date={new Date().toLocaleDateString()}>
                    Esto seria un texto largo lorem ipsum
            </Article>
        </div>
    );
}

export default App;
// props special children 