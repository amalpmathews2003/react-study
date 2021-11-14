import GoogleMapReact from 'google-map-react'
import './myStyle.css'
import LocationMarker from './LocationMarker'
import {useState} from 'react'

export const LocationInfoBox=({info})=>{
	return(
		<div className="location-info">
			<h2>Event Location Info</h2>
			<ul>
				<li>ID:<strong>{info.id}</strong></li>
				<li>Title:<strong>{info.title}</strong></li>
			</ul>
		</div>
		)
}

export const Map=({eventData,center,zoom})=>{
	const [locationInfo,setLocationInfo]=useState(null)

	const markers=eventData.map((ev,index)=>{
		if(ev.categories[0].id===8)
		{
			return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} 
			lng={ev.geometries[0].coordinates[0]} onClick={()=>setLocationInfo({id:ev.id,title:ev.title})}/>
		}
		return null
	})
	return(
		<div className="map">
		<GoogleMapReact 
			bootstrapURLKeys={{key:`${process.env.REACT_APP_GOOGLE_MAP_KEY}`}}
			defaultCenter={center} defaultZoom=	{zoom}>
			{markers}
			
		</GoogleMapReact>
		{locationInfo &&<LocationInfoBox info={locationInfo}/>}
		</div>
		)
} 
Map.defaultProps={
	center:{
		lat:42.3265,
		lng:-122.8756
	},
	zoom:6
}
