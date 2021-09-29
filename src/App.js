import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import HelloJsx from './components/hello'
import {Hello} from './components/hello'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter addVal="6"/>
      <Greet name="amal" heroName="Ironman">
        <p>This is children props</p>
      </Greet>
      <Welcome/> 
      <HelloJsx/>
      <Hello/>
      <Greet name="aleena" heroName="WM">
      <button>button</button>
      </Greet>
      <Greet name="asha"/>
      <Welcome name="amal" heroName="Ironman" />
      <Message/>
    </div>
    );
}

export default App;
