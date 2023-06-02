import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <>
            <NavLink
                to={to}
                className={({isActive})=> isActive? 'text-white hover:bg-transparent':  "text-black hover:bg-transparent"}
            >
                {children}
            </NavLink>
        </>
    );
};

export default ActiveLink;