import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';

class Map extends Component {
    static defaultProps = {
        center: {lat: 45.4835629, lng: -122.5948495},
        zoom: 12
    };

    render() {
        debugger;
        return (
            <div className="live-map">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    {this.props.transports.map((trans) => {
                        return (
                            <div key={trans.entity[0].id} className="marker"
                                 lat={trans.entity[0].vehicle.position.latitude}
                                 lng={trans.entity[0].vehicle.position.longitude}>
                                {trans.entity[0].vehicle.trip.route_id}
                            </div>
                        );
                    })}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;