import React, {Component} from 'react';
import List from '../../components/list/list';
import MapComponent from '../../components/map/mapComponent';
import {subscribeToTransportData, unsubscribeToTransportData} from '../../api';
import './wrapper.css';

class Wrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vehicleMap: new Map(),
            routesMap: new Map(),
            routeFilter: '',
            msg: {
                entity: [
                    {
                        id: 'Not Received'
                    }
                ]
            }
        };

        this.processMessage = this.processMessage.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.filterForRoute = this.filterForRoute.bind(this);
        subscribeToTransportData(this.processMessage);
    }

    processMessage(err, msg) {
        if (msg.entity[0].vehicle.vehicle.label) {
            let label = msg.entity[0].vehicle.vehicle.label;
            let vehicleId = msg.entity[0].vehicle.vehicle.id;
            let position = msg.entity[0];
            let color;

            if (!this.state.routesMap.get(label)) {
                color = Wrapper.getRandomColor();
                let vehicles = new Set();
                vehicles.add(vehicleId);
                this.state.routesMap.set(label, {
                    label: label,
                    vehicles: vehicles,
                    color: color
                });
            } else {
                let route = this.state.routesMap.get(label);
                color = route.color;
                route.vehicles.add(vehicleId);
                this.state.routesMap.set(label, route);
            }

            position.color = color;
            this.state.vehicleMap.set(vehicleId, position);

            this.setState({
                vehicleMap: this.state.vehicleMap
            });
        }
    }

    static getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    static unsubscribe() {
        console.log('Disconnecting');
        unsubscribeToTransportData();
    }

    filterForRoute(route) {
        this.setState({
           routeFilter: route.label
        });
    }

    clearFilter(){
        this.setState({
            routeFilter: ''
        });
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <List routesMap={this.state.routesMap} filter={this.filterForRoute}/>
                    <MapComponent vehicleMap={this.state.vehicleMap} routeFilter={this.state.routeFilter}/>
                </div>
                <div>
                    <button onClick={this.clearFilter}>Clear Filter</button>
                    <button onClick={Wrapper.unsubscribe}>Stop Refresh</button>
                </div>
            </div>
        );
    }
}

export default Wrapper;