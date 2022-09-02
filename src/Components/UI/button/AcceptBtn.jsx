import classes from './AcceptButt.module.css'
import React from 'react';

const AcceptBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};
export default AcceptBtn;