import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/categories';
import FilterNavLink from './FilterNavLink';

class AppHeader extends Component {


    render() {
        // const routeCategory = this.props.match.params.categoryName;
        const {categoriesIds, categories, categoryName} =  this.props;
        return (
            <div className='appHeader-container'>
                <div className='main-link-container'>
                    <Link className='main-link'
                        to='/'
                    >Readable</Link>
                </div>

                <div className='category-menu'>
                {categoriesIds !== undefined && categoriesIds.map(category => (
                    <li
                        key={categories[category].name}
                        className={
                            'category-list__item' + (categoryName === categories[category].name ? "--active" : "")
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

                <div className='add-post'>
                    <Link
                        className='add-link'
                        to={'/add/post'}
                    >
                        <button className='add-post__button'>new post</button>
                        <span className='add-post__text'>NEW POST</span>
                    </Link>
                </div>


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

