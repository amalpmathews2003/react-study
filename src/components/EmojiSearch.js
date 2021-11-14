
import React,{useState,useEffect} from 'react'

export const  EmojiSearch=()=>{
	let hex = "\ud83d\ude00".codePointAt(0).toString(16)
	let emo = String.fromCodePoint("0x"+hex);
	const [emojies,setEmojies]=useState([]);
const [data,setData]=useState([]);

  const getData=()=>{
    fetch('https://emoji-api.com/emojis?access_key=99ecd2240040e9172d2abdfa6a3558bbbfe254a2'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

    
	return(
		<div>

		{emo}
		{emojies}
		</div>
		)
}
