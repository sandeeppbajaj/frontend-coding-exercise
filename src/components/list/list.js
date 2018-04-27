import React, {Component} from 'react';
import './list.css';

class List extends Component {
    render() {
        let rows = [];
        this.props.routesMap.forEach((route) => {
            let styles = {backgroundColor: route.color};
            rows.push(
                <li key={route.label}>
                    <span className="route-color" style={styles}/>{route.label} - {route.vehicles.size}
                </li>);
        });
        return (
            <div className="route-list">
                <div>
                    Routes:
                </div>
                <ul>
                    {rows}
                </ul>
            </div>
        );
    }
}

export default List;