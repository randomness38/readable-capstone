import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PostItemList extends Component {
    componentDidMount() {
        this.fetchPosts();
    }
    // 여기에 match 어쩌고 써야 하는 것 같음 prams.category
    fetchPosts() {
        const { category, fetchPosts } = this.props;
        fetchPosts(category);
    }


    render() {
        return (

            <div>TEST</div>

        )
    }
}

// function mapStateToProps(state, { params }) {
//     return{
//         category: this.props.match.params.category,
//         posts: state.posts,
//         postsIds: state.postsIds
//     }
// }

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        postsIds: state.postsIds,
        // todos: getVisibleTodos(state, filter),
    };
};

PostItemList = withRouter(connect(
    mapStateToProps,
    actions
)(PostItemList));

export default PostItemList ;
