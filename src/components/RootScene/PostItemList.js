import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/categories';

class PostItemList extends Component {



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
