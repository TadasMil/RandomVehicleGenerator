import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export const VehcileImages = ({vehicleImages}) => {
    return (
        <div>
             <SimpleImageSlider
                    width={220}
                    height={220}
                    images={vehicleImages}
                    showBullets={false}
                />
        </div>
    )
}
