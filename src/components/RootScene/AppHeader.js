import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/categories';
import FilterNavLink from './FilterNavLink';

class AppHeader extends Component {


    render() {
        const routeCategory = this.props.match.params.categoryName;
        console.log(routeCategory)
        const {categoriesIds, categories} =  this.props;
        return (
            <div className='appHeader-container'>
                <Link
                    to='/'
                >Readable</Link>
                <div className='category-menu'>
                {categoriesIds !== undefined && categoriesIds.map(category => (
                    <li
                        key={categories[category].name}
                        className={
                            'category-list__item' + (routeCategory === categories[category].name ? "--active" : "")
                        }
                    >
                        <FilterNavLink
                            filter={categories[category].path}
                        >
                            {categories[category].name}
                        </FilterNavLink>
                    </li>
                ))}
                </div>

                <Link
                    to={'/add/post'}
                >
                    <button>new post</button>
                </Link>

            </div>

        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        categoryName: ownProps.match.params.categoryName || 'all',
        categories: state.categories.entities,
        categoriesIds: state.categories.ids
    }
}

AppHeader = withRouter(connect(
    mapStateToProps,
    actions
)(AppHeader));

export default AppHeader ;

