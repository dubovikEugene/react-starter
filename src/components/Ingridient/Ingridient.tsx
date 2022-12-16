import React from 'react'
import classes from './Ingridient.module.css'

type Props = {
    name: string,
    quantity: string
};

const Ingridient = ({name, quantity}: Props) => {

    return(
        <div className={classes.ingridient_container}>
            <div className={classes.ingridient_name}>{name}</div>
            <div className={classes.ingridient_quantity}>{quantity}</div>
        </div>
    )
}

export default Ingridient;