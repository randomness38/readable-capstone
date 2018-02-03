import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FilterNavLink from './FilterNavLink';

class Header extends Component {
    componentDidMount() {
        this.fetchCategories();
    }

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.fetchCategories();
        }
    }

    fetchCategories() {
        const { fetchCategories } = this.props;

        fetchCategories();
    }

    render() {
        const { categories } = this.props;
        console.log(categories)
        return (
            <div>
                <Link
                    to='/'
                >Readable</Link>

                {categories !== undefined && categories.map(category => (
                    <FilterNavLink
                        filter={category.path}
                        key={category.name}
                    >
                        {category.name}
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

const mapStateToProps  = (state) => ({
    categories: state.categories,
})

Header = withRouter(connect(
    mapStateToProps,
    actions
)(Header));

export default Header ;
