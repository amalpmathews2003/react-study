import GoogleMapReact from 'google-map-react'
import './myStyle.css'
import LocationMarker from './LocationMarker'
export const Map=({center,zoom})=>{
	return(
		<div className="map">
		<GoogleMapReact 
			bootstrapURLKeys={{key:'AIzaSyC8u-tO86sDJxz1oInHPqgAE_f86WCLuFw'}}
			defaultCenter={center} defaultZoom=	{zoom}>
			<LocationMarker lat={center.lat} lng={center.lng}/>
		</GoogleMapReact>
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