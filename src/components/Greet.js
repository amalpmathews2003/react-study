import React from 'react'

// function Greet(){
// 	return <h1>Hello Amal</h1>
// }

// const Greet =props =>{

// 	console.log(props)
// 	return ( 
// 		<div>
// 			<h1>Hello {props.name} aka {props.heroName}</h1>
// 		{props.children}
// 		</div>
// 		)
// }
// const Greet =({name,heroName})=>{

// 	return ( 
// 		<div>
// 			<h1>Hello {name} aka {heroName}</h1>
	
// 		</div>
// 		)
// }
const Greet =props=>{
	const {name,heroName}=props
	return ( 
		<div>
			<h1>Hello {name} aka {heroName}</h1>
	
		</div>
		)
}


// export const Greet =()=><h1>Hello Amal</h1>


export default Greet