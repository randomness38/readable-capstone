import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PostItemList extends Component {
    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        const { fetchPosts, filter } = this.props;
        fetchPosts(filter);
    }

    render() {
        const {posts, postsIds} =  this.props;
        console.log(posts,postsIds)
        return (

            <div>TEST</div>

        )
    }
}

function mapStateToProps(state){
    return{
        posts: state.posts,
        postsIds: state.postsIds
    }
}

PostItemList = withRouter(connect(
    mapStateToProps,
    actions
)(PostItemList));

export default PostItemList ;
