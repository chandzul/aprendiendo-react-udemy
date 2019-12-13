import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

    static propTypes = {
        author: PropTypes.string.isRequired
    }

    // constructor (props) {
    //     super(props)
    //     if(typeof props.author === 'undefined') {
    //         console.warn('author props is required')
    //         throw new Error('author props is requiered')
    //     }
    // }

    render () {
        
        let {author, children, date, title} = this.props

        return (
            <section>
                <h2>{title}</h2>
                { author && <p><em>Escrito por {author}</em></p>}
                <span>{date}</span>
                <article>
                    {children}
                    <hr />
                </article>
            </section>
        )
    }
}

// Article.protoTypes = {
//     author: PropTypes.string
// }

function App () {
    return (
        <div className='App'>
            <h4>Children props</h4>
            <Article 
                title='Articulo de como usar prop children' 
                author='@jonhdoe'
                date={new Date().toLocaleDateString()}>
                    Esto seria un texto largo lorem ipsum
            </Article>
            {/* <Article 
                title='Articulo de como usar prop children 2' 
                author='@chandzul' 
                date={new Date().toLocaleDateString()}>
                    Esto seria un texto largo lorem ipsum 
                    <strong> dolor sit a met</strong>
            </Article> */}
        </div>
    );
}

export default App;
// props special children 