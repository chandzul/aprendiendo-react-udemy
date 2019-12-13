import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello (props) {
//   return <h2>{props.title}</h2>
// }

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render () {

    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props;

    const mappedNumbers = arrayOfNumbers.map(multiply);

    return <div>
      {title}
      {/* <p>{this.props.text}</p>
      <p>{this.props.number}</p>
      <p>{textoSegunBool}</p> */}
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Welcome from props extend component'/>
        <Text
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key: 'First Value', key2: 'otherValue' }}
          multiply={(number) => number * 3}
          number={2} 
          text='Texto en string'
          title={<h1>Este es un titulo</h1>}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
