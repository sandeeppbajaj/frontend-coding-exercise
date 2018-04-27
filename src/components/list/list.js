import React, {Component} from 'react';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(route) {
        this.setState({
           filter: route.label
        });
        this.props.filter(route);
    }

    render() {
        let rows = [];
        this.props.routesMap.forEach((route) => {
            let styles = {backgroundColor: route.color};
            rows.push(
                <li key={route.label} onClick={() => this.handleClick(route)} className="route-item">
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