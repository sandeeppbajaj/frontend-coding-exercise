import React, {Component} from 'react';
import List from '../../components/list/list';
import Map from '../../components/map/map';
import './wrapper.css';

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <List/>
                <Map/>
            </div>
        );
    }
}

export default Wrapper;