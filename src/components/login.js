import React from 'react';
import {useHistory} from 'react-router-dom';

function login(){
	let history=useHistory();

	return (
		<div>
		<input type="text" placeholder="username"/>
		<input type="text" placeholder="password"/>
		<button onClick={()=>history.push("/profile")}>Login</button>
		</div>
		)
}

export default login