import React from 'react'
import Person from './Person'
function NameList(){
	const persons=[
		{
			id:1,
			name:'amal',
			'age':19,
			skill:'react'
		},
		{
			id:2,
			name:'aleena',
			'age':17,
			skill:'drawing'
		},
		{
			id:3,
			name:'asha',
			'age':53,
			skill:'std 2'
		},
		{
			id:4,
			name:'lalu',
			'age':56,
			skill:'maths'
		},
	]
	const output=persons.map((person,index)=><Person person={person} key={person.id}/>)
		
	return(<div>{output}</div>)
}
export default NameList