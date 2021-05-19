import React from 'react';
import classes from './Button.module.css';

const button=(props)=>(
    <buton className={[classes.Button,classes[props.btnType]].join(' ')} onClick={props.clicked} >{props.child}</buton> 
);
export default button;