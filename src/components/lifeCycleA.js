import React,{Component} from 'react'
import LifeCycleB from './lifeCycleB'
class  LifeCycleA extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'amal'
		}
		console.log('lifeCycleA constructor')
	}
	static getDerivedStateFromProps(props,state){
		console.log('lifeCycleA getDerivedStateFromProps')
		return null
	}
	componentDidMount(){
		console.log('lifeCycleA componentDidMount')
	}
	shouldComponentUpdate(){
		console.log('lifeCycleA shouldComponentUpdate')
		return true
	}
	getSnapshotBeforeUpdate(prevProps,prevStates){
		console.log('lifeCycleA getSnapshotBeforeUpdate')
				return null

	}
	componentDidUpdate(){
		console.log('lifeCycleA componentDidUpdate')
	}
	changeState=()=>{
		this.setState({
			name:'updated amal'
		})
	}
	render(){
		console.log('lifeCycleA render')
		return (
			<div>
				LifeCycleA
				<button onClick={this.changeState}>ChangeState</button>
				<LifeCycleB/>
			</div>
			)
	}
}

export default LifeCycleA