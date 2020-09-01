import React from 'react'
import {VehcileImages} from './VehcileImages/VehicleImages'
import classes from './Vehicle.module.css'

export const Vehicle = ({vehicleInfo}) => {
    const {marke, modelis, metai, kaina}= vehicleInfo;
    const vehicleImages = GetVehcileImages(vehicleInfo);
    return (
        <div className={classes.Vehicle}>
              <VehcileImages vehicleImages={vehicleImages}/>
            <div className={classes.VehicleDescription}>
                <h4>{marke}</h4>
                <p>Modelis: {modelis}</p>
                <p>Metai: {metai}</p>
                <h5>{kaina} €</h5>
            </div>
        </div>
    )
}

const GetVehcileImages = (vehicleInfo) => {
    const vehicleImages = [];
    for(var item in vehicleInfo.nuotraukos){
        let vehcileImage = {
            url: vehicleInfo.nuotraukos[item]
        }
        vehicleImages.push(vehcileImage);
    }
    return vehicleImages;
}
