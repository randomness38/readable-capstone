import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FilterLink from './FilterLink';

class Header extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.fetchData();
        }
    }

    fetchData() {
        const { fetchCategories } = this.props;

        fetchCategories();
    }

    render() {
        const { categories } = this.props;
        console.log('category: ' + {categories})
            return (
                <div>
                    <Link
                        to='/'
                        className='navbar-brand'
                        alt='Readable'
                    >Readable</Link>

                    {categories !== undefined && categories.map(category => (
                        <FilterLink
                            filter={category.path}
                        >
                            {category.name}
                        </FilterLink>
                    ))}

                    <li className="nav-item">
                        <Link
                            to='/new'
                            className="nav-link"
                        >new post</Link>
                    </li>

                </div>

            )
    }
}

const mapStateToProps  = ({ categories }) => ({
    categories,
})

Header = withRouter(connect(
    mapStateToProps,
    actions
)(Header));

export default Header ;
