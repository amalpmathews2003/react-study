import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
//import $ from 'jquery'
import GoogleMap from './components/GoogleMap'
// import {Greet} from './components/Greet'

import {Authenications} from './components/firebase_auth'
import {TextGen} from './components/random_text_generater'

  //import {Facebook} from './components/Facebook'


import ImageGallary from './components/ImageGallary'
//import {EmojiSearch} from './components/EmojiSearch'
import FireTraker from './components/FireTraker' 

import ModelGallary from './components/ModelGallaryRouting'
const routes=[
{
  path:'/Home',
  exact:true,
  title:'Home',
  main:()=><h2>Home</h2>
},
{
  path:'/GoogleMap',
  title:'Google Map',
  main:()=><GoogleMap/>
},
{
  path:'/Authenications',
  title:'Authenications',
  main:()=><Authenications/>
},
{
  path:'/TextGen',
  title:'TextGen',
  main:()=><TextGen/>
},
{
  path:'/ImageGallary',
  title:'ImageGallary',
  main:()=><ImageGallary/>
},
{
  path:'/FireTraker',
  title:'FireTraker',
  main:()=><FireTraker/>
},
{
  path:'/ModelGallary',
  title:'ModelGallary',
  main:()=><ModelGallary/>
},
]
export default function SideBar(){
  return(
    <Router>
  <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div style={{padding:'5px',width:'20%',background:'rgba(0,0,255,0.5)'}}>
            <button className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Appications</button>
        <nav  className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        {routes.map((route,index)=>(
          <button key={index} className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
            <Link to={route.path} >{route.title}</Link>
          </button>
          ))}
        </nav>
      </div>
            
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>

    </div>  
    </Router>
    )
}