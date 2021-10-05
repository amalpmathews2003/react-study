//import logo from './logo.svg';
import './App.css';
// import {Greet} from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import HelloJsx from './components/hello'
import {Hello} from './components/hello'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/InlineStyle'
import './AppStyle.css'
import styles from'./AppStyle.module.css'
import Form from './components/Form'
import {Authenications} from './components/firebase_auth'
import {TextGen} from './components/random_text_generater'

import login from './components/login'
import {BrowserRouter as Router,Route,Switch,Link,withRouter} from 'react-router-dom'

import LifeCycleA from './components/lifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import {Map} from './components/Map'
import ImageGallary from './components/ImageGallary'
function App() {

  return (
    <Router>
    <div className="App">
      <ImageGallary/>
      {/*<Map/>*/}
      <Table/>
      <FragmentDemo/>
      <LifeCycleA/>
      <hr/>
      <Link to="/login">Login</Link>

      <Switch>
        <Route exact path="/login" component={withRouter(login)}></Route>
      </Switch>
     
      <TextGen/>
      <br/>
      <Authenications/>
      <br/>
      <Form/>
      <h1 className="error">error</h1>
      <h1 className={styles.success} >Success</h1>
      <Inline/>
      <StyleSheet primary={true}/>
      <NameList/>
      <UserGreeting/>
      <ParentComponent/>
      <EventBind/>
      <ClassClick/>
      <FunctionClick/>
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
     </Router>
    );
}

export default App;
