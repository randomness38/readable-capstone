import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router';
import SortBy from 'sort-by';
import PostItem from "../Forms/PostItem";
import {fetchPostsByCategory} from "../../actions/posts";
import { ButtonGroup,Button } from 'react-bootstrap';

class RootScene extends Component {

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.categoryName !== prevProps.categoryName) {
            this.fetchData();
        }
    }

    fetchData() {
        const { categoryName, fetchPostsByCategory } = this.props;
        fetchPostsByCategory(categoryName);
    }


    state = {
        sortBy: '-voteScore',
        filteredPosts:[]
    };

    sortBy = (value) => {
        this.setState({sortBy: value});
    };


    render() {
        const {posts, postsIds, categoryName} =  this.props;
        let postsToRender, filteredPosts;
        if(categoryName === 'all'){
            filteredPosts = postsIds.map( postId => posts[postId] )
        } else {
            const idsFromCurrentCategory = postsIds.filter( postId => posts[postId].category === categoryName );
            filteredPosts = idsFromCurrentCategory.map( postId => posts[postId] );
        }

        postsToRender = filteredPosts.filter( post => !post.deleted );
        postsToRender.sort(SortBy(this.state.sortBy))

        return (
            <div className='root-scene-container'>
                <div className='sort-by-container'>
                    <div className='button-group'>
                        <ButtonGroup value={this.state.sortBy} onClick={(e) => this.sortBy(e.target.value)}>
                            <Button value="-voteScore">Best score</Button>
                            <Button value="-timestamp">Most recent</Button>
                        </ButtonGroup>

                    </div>

                </div>

                <div>
                    {
                        postsToRender.map(post => (
                            <PostItem key={`${post.id}-${post.category}${categoryName}_view`} post={post}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        categoryName: ownProps.match.params.categoryName || 'all',
        categories: state.categories.entities,
        categoriesIds: state.categories.ids,
        posts: state.posts.entities,
        postsIds: state.posts.ids,
    }
}

RootScene = withRouter(connect(
    mapStateToProps, { fetchPostsByCategory }
)(RootScene));

export default RootScene;
