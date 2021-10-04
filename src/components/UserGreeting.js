import React,{Component} from 'react'

class UserGreeting extends Component{
	constructor(props){
		super(props)
		this.state={
			isLoggedIn:false,

		}
	}
	render(){

		return(
			this.state.isLoggedIn?
				<div>Welcome Amal</div>:
				<div>Welcom guest</div>
			)
		
		// let message
		// if (this.state.isLoggedIn){
		// 	message=<div>Welocome Amal</div>
		// }
		// else{
		// 	message=<div>Welocome Guest</div>
		// }
		// return(message)

		// if (this.state.isLoggedIn){
		// 	return(<div>welcome amal</div>)
		// }
		// else{
		// 	return(<div>welcome guest</div>)
		// }

	}

}
export default UserGreeting