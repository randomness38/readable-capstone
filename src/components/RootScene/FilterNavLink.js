import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterNaveLink = ({
                        filter,
                        children
                    }) => (
    <NavLink
        className='nav-link'
        exact
        to={`/category/${filter === 'all' ? '' : filter}`}
        // activeStyle={{
        //      textDecoration: 'none',
        //  }}
    >
        {children}
    </NavLink>
);

export default FilterNaveLink;
