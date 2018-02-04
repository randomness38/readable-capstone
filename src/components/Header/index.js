import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FilterNavLink from './FilterNavLink';

class Header extends Component {
    componentDidMount() {
        this.fetchCategories();
    }

    // componentWillMount(){
    //     const { categories } =  this.props;
    //     if ( Object.keys(categories).length === 0 ) {
    //         this.fetchCategories()
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.category !== prevProps.category) {
    //         this.fetchCategories();
    //     }
    // }

    fetchCategories() {
        const { fetchCategories } = this.props;

        fetchCategories();
    }

    render() {
        const {categoriesIds, categories} =  this.props;
        return (
            <div>
                <Link
                    to='/'
                >Readable</Link>

                {categoriesIds !== undefined && categoriesIds.map(category => (
                    <FilterNavLink
                        filter={categories[category].path}
                        key={category.name}
                    >
                        {categories[category].name}
                    </FilterNavLink>
                ))}

                <li className="nav-item">
                    <Link
                        to='/new'
                    >new post</Link>
                </li>

            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        categories: state.categories,
        categoriesIds: state.categoriesIds
    }
}

Header = withRouter(connect(
    mapStateToProps,
    actions
)(Header));

export default Header ;
