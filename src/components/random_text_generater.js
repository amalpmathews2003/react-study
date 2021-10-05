import React,{Component} from 'react';
import axios from 'axios';

export class TextGen extends Component{
	constructor(props){
		super(props);
		this.state={
			paras:4,
			html:"html" ,
			text:''
		}
	}
	componentWillMount(){
		this.getSampleText();
	}
	getSampleText(){
		console.log(this.state.html)
		axios.get(`https://baconipsum.com/api/?type=meat-and-filler&paras=${this.state.paras}&format=${this.state.html}`)
		.then((res)=>{
			this.setState({text:res.data})
			//console.log(res.data)
		})
		.catch((err)=>{console.log(err)})
	}
	showHtml(html,para){
		//console.log(e)
		this.setState({html:html,paras:para},this.getSampleText())
	}
	render(){
		return(
			<div>
			<h1>Sample Text Generater</h1>
			<form className="form-inline">
			<div>
				<Select  onChange={this.showHtml.bind(this)}/>
			</div>
			</form>
			<hr/>
			{this.state.text}
			</div>)
	}
}



class Select extends Component{
	constructor(props){
		super(props)
		this.state={
			value:props.value,
			para:4
		}
	}
	onChange(e){
		console.log(e.target.value)
		this.setState({
			value:e.target.value
		},function(){this.props.onChange(this.state.value,this.state.para)})
	}
	onChange2(e){
		console.log(e.target.value)
		this.setState({
			para:e.target.value
		},function(){this.props.onChange(this.state.value,this.state.para)})
	}
	render(){
		return(
			<>
			<select className="form-control" onChange={this.onChange.bind(this)}>
				<option value="text">Html</option>
				<option value="html">Text</option>
			</select>
			<select className="form-control" onChange={this.onChange.bind(this)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4" >4</option>
				<option value="5">5</option>
			</select>
			</>
			)
	}
}