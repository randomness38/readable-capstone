import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PostItems from './PostItems';
import FetchError from './FetchError';
import { getVisiblePosts, getIsFetching, getErrorMessage  } from '../../reducers';

class PostList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        const { category, fetchPosts } = this.props;

        fetchPosts(category);
    }

    render() {
        // const { toggleTodo, isFetching, errorMessage, posts } = this.props;
        const { isFetching, errorMessage, posts } = this.props;

        if (isFetching && !posts.length)
            return <p>Loading...</p>;

        if (errorMessage && !posts.length) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />
        }

        return <PostItems
            posts={posts}
            // onTodoClick={toggleTodo}
        />
    }
}

const mapStateToProps = (state, { match: { params }}) => {
    const category = params.category || 'readable';
    // const category = params.category

    return {
        posts: getVisiblePosts(state, category),
        isFetching: getIsFetching(state, category),
        errorMessage: getErrorMessage(state, category),
        category
    };
};

PostList = withRouter(connect(
    mapStateToProps,
    actions
)(PostList));

export default PostList ;
