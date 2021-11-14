import React,{useState,useEffect} from 'react'
import {Map} from './Map'
import Loader from "react-loader-spinner";

import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

function Header(){
	return(
		<div>
		<header className="header">
			<h1><Icon icon={locationIcon}/>Wildfire Traker (Powered By NASA)</h1>
		</header>
		</div>
		)
}

function MyLoader(){
	return(
		<div className="loader">
			<Loader type="BallTriangle" color="#00BFFF" height ={100} width={100} />
			<h1>Fetching Data</h1>
		</div>
		)
}

function FireTraker(){

	const [eventData,setEventData]=useState([]);
	const [loading,setLoading]=useState(false);

	useEffect(()=>{
		const fetchEvent= async ()=>{
			setLoading(true);
			const res=await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
			const {events}=await res.json();
			setEventData(events);
			setLoading(false);
		}	
		fetchEvent()
		//console.log(eventData)
	},[])

	return(
		<div>
		<Header/>
		{!loading?<Map eventData={eventData}/>:<MyLoader/>}
		</div>
		)
}
export default FireTraker