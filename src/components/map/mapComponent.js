import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './mapcomponent.css';

class MapComponent extends Component {
    static defaultProps = {
        center: {lat: 45.4835629, lng: -122.5948495},
        zoom: 13
    };

    render() {
        let rows = [];
        this.props.vehicleMap.forEach((vehicle, vehicleId) => {
            let styles = {backgroundColor: vehicle.color};
            if(!this.props.routeFilter || vehicle.vehicle.vehicle.label === this.props.routeFilter){
                rows.push(<div key={vehicleId} className="marker"
                               lat={vehicle.vehicle.position.latitude}
                               lng={vehicle.vehicle.position.longitude}
                               style={styles}>
                    {vehicleId}
                </div>);
            }
        });

        return (
            <div className="live-map">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    {rows}
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapComponent;