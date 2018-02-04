import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterNaveLink = ({
                        filter,
                        children
                    }) => (
    <NavLink
        exact
        to={`/category/${filter === 'all' ? '' : filter}`}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
        }}
    >
        {children}
    </NavLink>
);

export default FilterNaveLink;
