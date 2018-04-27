import React, {Component} from 'react';
import List from '../../components/list/list';
import Map from '../../components/map/map';
import './wrapper.css';

class Wrapper extends Component {
    static defaultProps = {
        transportationList: [
            {
                "header": {
                    "gtfs_realtime_version": "1",
                    "incrementality": 0,
                    "timestamp": 1524802592,
                    "user-data": "trimet"
                },
                "entity": [
                    {
                        "id": "3733",
                        "vehicle": {
                            "trip": {
                                "trip_id": "8218421",
                                "route_id": "72"
                            },
                            "vehicle": {
                                "id": "3733",
                                "label": "72 Swan Island"
                            },
                            "position": {
                                "latitude": 45.55716,
                                "longitude": -122.701866,
                                "bearing": 308
                            },
                            "current_stop_sequence": 105,
                            "stop_id": "115",
                            "current_status": 2,
                            "timestamp": 1524802589
                        }
                    }
                ]
            },
            {
                "header": {
                    "gtfs_realtime_version": "1",
                    "incrementality": 0,
                    "timestamp": 1524802592,
                    "user-data": "trimet"
                },
                "entity": [{
                    "id": "3571",
                    "vehicle": {
                        "trip": {"trip_id": "8214500", "route_id": "33"},
                        "vehicle": {"id": "3571", "label": "33 To Clackamas Town Center"},
                        "position": {"latitude": 45.43828, "longitude": -122.576294, "bearing": 89},
                        "current_stop_sequence": 77,
                        "stop_id": "12921",
                        "current_status": 2,
                        "timestamp": 1524802587
                    }
                }]
            }
        ]
    };

    render() {
        return (
            <div className="wrapper">
                <List transports={this.props.transportationList}/>
                <Map transports={this.props.transportationList}/>
            </div>
        );
    }
}

export default Wrapper;