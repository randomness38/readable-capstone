import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/categories';
import FilterNavLink from './FilterNavLink';

class AppHeader extends Component {


    render() {
        const {categoriesIds, categories} =  this.props;
        return (
            <div>
                <Link
                    to='/'
                >Readable</Link>

                {categoriesIds !== undefined && categoriesIds.map(category => (
                    <li  key={categories[category].name}>
                        <FilterNavLink
                            filter={categories[category].path}
                        >
                            {categories[category].name}
                        </FilterNavLink>
                    </li>
                ))}

                <Link
                    to={'/add/post'}
                >
                    <button>new post</button>
                </Link>

            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        categories: state.categories.entities,
        categoriesIds: state.categories.ids
    }
}

AppHeader = withRouter(connect(
    mapStateToProps,
    actions
)(AppHeader));

export default AppHeader ;
