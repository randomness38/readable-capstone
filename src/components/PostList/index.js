import React from 'react';

const PostList = () => {

<<<<<<< HEAD
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
       return (

       )
=======
    return (
        <div>
            PostList
        </div>
    );
>>>>>>> parent of 4b2e0181... feetching 을 못함
}

export default PostList;
