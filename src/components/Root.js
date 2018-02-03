import 'bootstrap/dist/css/bootstrap.css'
import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BoruRouter, Route  } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import {connect} from 'react-redux'

// Route path component
import Header from './Header'
import PostItemList from './PostItemList'
import Post from './Post'
import CommentModal from './ComentModal';
import PostModal from './PostModal';

import {
    fetchCategories
} from '../actions'

const history = createHistory();

class Root extends Component {

    componentWillMount() {
        const {fetchCategories } = this.props;
        fetchCategories();
    }

    render(){
        const { store } = this.props;

        return(
            <Provider store={store}>
                <Router history={history}>
                    <div className="app">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-4">
                                    <CategoryList/>
                                </div>
                                <CommentModal activeModalType='comments' modalAction='comment' />
                                <PostModal    activeModalType='posts'    modalAction='post' />

                                <div className="col-xs-8">
                                    <Route
                                        key={'category-route'}
                                        exact path='/:categoryId'
                                        render={({match}) => ( <PostListConnected category={ match.params.categoryId}/>)}
                                    />

                                    <Route
                                        exact path='/'
                                        render={ () => (
                                            <PostListConnected
                                                category='all'
                                            />
                                        )}
                                    />
                                    <Route
                                        key='category-post-details-route'
                                        exact path={`/:categoryId/:postId`}
                                        render={({match}) => (
                                            <Post
                                                category={ match.params.categoryId}
                                                postId={ match.params.postId}
                                            />
                                        )}
                                    />

                                </div>
                            </div>

                        </div>


                    </div>
                </Router>
            </Provider>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchCategories: fetchCategories(dispatch),
    }
}

function mapStateToProps(state){
    return {
        categories: state.categories,
        categoriesIds: state.categoriesIds,
    }
}

const RootConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    categoriesIds: PropTypes.array.isRequired,
};

export default RootConnected
