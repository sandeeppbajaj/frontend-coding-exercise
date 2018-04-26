import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css';

class Map extends Component {
    static defaultProps = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 14
    };

    render() {
        return (
            <div className="live-map">
                <GoogleMapReact
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }>
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;