import React, {useState} from 'react';
import classes from './ShowButton.module.css'

const ShowButton = ({children, ...props}: any) => {

    return (
        <button {...props} className={classes.show_button}>
            {children}
        </button>
    )
}

export default ShowButton;