import React from 'react'
import classes from './Button.module.css'

export const Button = ({name, handleNewVehicle}) => <button className={classes.Button} onClick={handleNewVehicle} type='submit'>{name}</button>
