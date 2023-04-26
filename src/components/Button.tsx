import React from 'react';
import './Button.css';

type PropsType = {
    name: string
    ignition: ()=> void
}

export const Button = (props:PropsType) => {
    const onCLickHandler = ()=> {
        props.ignition()
    }
    return (
            <button className={"btnaddtasks"} onClick={onCLickHandler}>{props.name} </button>
    );
};
