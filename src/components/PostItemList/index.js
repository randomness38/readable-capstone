import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PostItemList extends Component {

    componentDidMount() {
        this.fetchData();
    }

    // componentWillReceiveProps(nextProps) {
    //     if( nextProps.match.params.category !== this.props.match.params.category ) {
    //         const filter = nextProps.match.params.category || false;
    //         this.fetchData(filter);
    //     }
    // }

    fetchData() {
        const { fetchPosts } = this.props;
        const filter = this.props.match.params.category || false;
        fetchPosts(filter)
    }




    // componentDidMount() {
    //     this.fetchPosts();
    // }
    //
    // fetchPosts() {
    //     const { fetchPosts, filter } = this.props;
    //     fetchPosts(filter);
    // }

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
