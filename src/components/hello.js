import React from 'react'

const HelloJsx=()=>{

	return (
		<div className="dummyclass2" >
			<h1>Hello Amal JSX</h1>
		</div>
		)
}

export const Hello=()=>{

	return React.createElement('div',{id:'hello_id',className:'dummyclass'},
		React.createElement('h1',null,'Hello amal without jsx'))
}
export default HelloJsx
//export default Hello