import React,{Component} from 'react'

class EventBind extends Component{
	constructor(props){
		super(props)
		this.state={
			message:'Hello'
		}
		this.clickHandler=this.clickHandler.bind(this)
	}
	clickHandler(){
		this.setState({
			message:"good bye"	
		})
		console.log(this)
	}
	render(){
		return(
			<div>
				<button onClick={this.clickHandler}>{this.state.message}</button>
				{/*<button onClick={()=>this.clickHandler()}>{this.state.message}</button>*/}
				{/*<button onClick={this.clickHandler.bind(this)}>{this.state.message}</button>*/}
			</div>
			)
	}

}

export default EventBind