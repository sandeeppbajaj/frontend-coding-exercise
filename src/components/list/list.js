import React, {Component} from 'react';
import './list.css';

class List extends Component {
    render() {
        return (
            <div className="route-list">
                <ul>
                    {this.props.transports.map((trans) => {
                        return (<li key={trans.entity[0].id}>{trans.entity[0].vehicle.vehicle.label}</li>);
                    })}
                </ul>
            </div>
        );
    }
}

export default List;