import React,{Component} from 'react'

class  LifeCycleB extends Component{
	constructor(props){
		super(props)
		this.state={
			name:'amal'
		}
		console.log('lifeCycleB constructor')
	}
	static getDerivedStateFromProps(props,state){
		console.log('lifeCycleB getDerivedStateFromProps')
		return null
	}
	componentDidMount(){
		console.log('lifeCycleB componentDidMount')
	}
	shouldComponentUpdate(){
		console.log('lifeCycleB shouldComponentUpdate')
		return true
	}
	getSnapshotBeforeUpdate(prevProps,prevStates){
		console.log('lifeCycleB getSnapshotBeforeUpdate')
				return null

	}
	componentDidUpdate(){
		console.log('lifeCycleB componentDidUpdate')
	}
	render(){
		console.log('lifeCycleB render')
		return (
			<div>
				lifeCycleB
			</div>
			)
	}
}

export default LifeCycleB