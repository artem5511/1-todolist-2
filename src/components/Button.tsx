import React from 'react';

type PropsType = {
    name: string
    ignition: ()=> void
}

export const Button = (props:PropsType) => {
    const onCLickHandler = ()=> {
        props.ignition()
    }
    return (
            <button onClick={onCLickHandler}>{props.name} </button>
    );
};
