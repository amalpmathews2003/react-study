import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link,useHistory,useLocation,useParams} from 'react-router-dom'

export default function ModelGallary(){
	return(
		<Router>
		<ModelSwitch/>
		</Router>
		)
}
function ModelSwitch(){
	let location =useLocation();
	let background =location.state&&location.state.background;
	return(
		<div>
		<Switch location={background||location}>
		<Route exact path="/" children={<Home/>}/>
		<Route exact path="/galary" children={<Gallery/>}/>
		<Route exact path="/img/:id" children={<ImageView/>}/>
		</Switch>
		{background&&<Route path="img/:id" children={<Model/>}/>}
		</div>
		)

}


const images=[
{id:0,title:'dark orchid',color:'DarkOrchid'},
{id:1,title:'lime green',color:'LimeGreen'},
{id:2,title:'Tomato',color:'Tomato'},
{id:3,title:'Seven Ate Nine',color : '#789'},
{id:4,title:'crimson',color:'Crimson'}
]

function Thumbnail({color}){
	return (<div
		style ={{width:50,height:50,background:color}}>
	</div>)
}

function Image({color}){
	return(<div
		style={{width:'100%',height:400,background:color}}
		></div>)
}

function Home(){
	return(<div>
		<Link to="/galary">Visit Gallary</Link>
		<h2>Featured Images</h2>
		<ul>
		<li><Link to="/img/2">Tomato</Link></li>
		<li><Link to="/img/4">Crimson</Link></li>
		</ul>

	</div>)
}
function Gallery(){
	let location=useLocation();
	return(<div>
		{images.map(i=>(
			<Link to={{pathname:`/img/${i.id}`,state:{background:location}}}>
			<Thumbnail color={i.color}/>
			<p>{i.title}</p>
			</Link>
		))}
	</div>)
}
function ImageView(){
	let {id}=useParams();
	let image=images[parseInt(id,10)];
	if(!image)return(<>Image Not Found</>)
	return(<div>
		<h1>{image.title}</h1>
		<Image color={image.color}/>
	</div>)
}
function Model(){
	let history=useHistory();
	let {id}=useParams();
	let image=images[parseInt(id,10)];

	if(!image)return null;

	let back=e=>{
		e.stopPropagation();
		history.goBack();
	};
	return(<div
		onClick={back} 
		style={{position:'absolute',
		top:0,
		left:0,
		bottom:0,
		right:0,
		background:"rgba(0,0,0,0.15)"
		}}>
		<div className="model"
		style={{
			position:'absolute',
			background:'#fff',
			top:25,
			left:"10%",
			right:"10%",
			padding:15,
			border:"2px solid #444"
		}}>
		<h1>{image.title}</h1>
		<Image color={image.color}/>
		<button type="button" onClick={back}>Close</button>
		</div>
		</div>)
}