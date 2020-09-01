import React, { Component } from 'react'
import classes from './Vehicles.module.css'
import {Button} from '../../components/UI/Button'
import axiosVehicle from '../../axios-vehicle'
import {Vehicle} from '../../components/Vehicle/Vehicle'
import { v4 as uuid } from 'uuid';

export default class Vehicles extends Component {
    state = {
        vehicles: []
    }

    //I've decided not to split the functionality of adding new vehcle on button click to the vehicles list into the new component. 
    //The Button is part of the vehicles list component.
    handleNewVehicle = () => {
        axiosVehicle.get('')
            .then(response => {
                const newVehcile = {...response.data, id: uuid()};
                const vehicles = [...this.state.vehicles, newVehcile];
                this.setState({
                    vehicles: vehicles
                })
            })
    }
    render() {
        return (
           <>
                <div className={classes.VehiclesList}>
                    <h3><span>Vehicles</span></h3>
                        <div className={classes.Vehicles}>
                            {
                                this.state.vehicles.map((vehicle) => {
                                    return <Vehicle key={vehicle.id} vehicleInfo={vehicle}  />
                                })
                            }
                        </div>
                    <Button handleNewVehicle={this.handleNewVehicle} name="Pridėti"/>
                </div>
           </>
        )
    }
}