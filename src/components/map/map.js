import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
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
                    <div className="marker" lat={this.props.center.lat} lng={this.props.center.lng}>Test Loc</div>
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;