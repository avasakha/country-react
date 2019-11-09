

import React , { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Bootstrap from '../_styles/bootstrap-grid.min.css';

export class MapContainer extends Component {

constructor (props){
    super(props);
    
}

    render() {
        return (
            <Map
                google={window.google}
             
            
                zoom={8}
                initialCenter={{ lat: this.props.latlng[0], lng: this.props.latlng[1]}}
                onClick={this.onMapClicked}
                
            >

                <Marker 
                    name={'Current location'}  position={{lat: this.props.latlng[0], lng: this.props.latlng[1]}} />

                
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAdj0C81rA_-Ko03ne6H63lfpvKS-vRNR4')
})(MapContainer)
