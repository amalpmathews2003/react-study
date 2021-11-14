import React,{useState,useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import Loader from "react-loader-spinner";

function MyLoader(){
	return(
		<div className="loader">
			<Loader type="BallTriangle" color="#00BFFF" height ={100} width={100} />
			<h1>Fetching Data</h1>
		</div>
		)
}

function GoogleMap(){
	const [location,setLocation]=useState({})
	const [loading,setLoading]=useState(false)
	function getLocation(){
			navigator.geolocation.getCurrentPosition((position)=>{
				console.log(position)
				setLocation({lat:position.coords.latitude,lng:position.coords.longitude})
			});
		}
	
	useEffect(()=>{
		getLocation()
		setLoading(true)
	},[])
	return(
		<div>
		{loading?
		<GoogleMapReact 
			bootstrapURLKeys={{key:`${process.env.REACT_APP_GOOGLE_MAP_KEY}`}}
			defaultCenter={location} defaultZoom={6}>
		</GoogleMapReact>
		:<MyLoader/>
		}
		{location}
		{loading.lat}
		</div>
		)
}
export default GoogleMap