
import React, {Component} from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router';
import SortBy from 'sort-by';
import AppHeader from './AppHeader'
import PostItem from "../Forms/PostItem";
import {fetchPostsByCategory} from "../../actions/posts";


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
        // console.log(categoryName)
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
        // 여기가 안먹힘 지금 categoryName이 all이 안떠
        if(categoryName === 'all'){
            filteredPosts = postsIds.map( postId => posts[postId] )
        } else {
            const idsFromCurrentCategory = postsIds.filter( postId => posts[postId].category === categoryName );
            filteredPosts = idsFromCurrentCategory.map( postId => posts[postId] );
        }

        postsToRender = filteredPosts.filter( post => !post.deleted );
        postsToRender.sort(SortBy(this.state.sortBy))


        // this.setState({filteredPosts: postsToRender});
        // console.log(postsToRender)

        return (
            <div className='root-scene-container'>
                <div>
                    <div>
                        <span>Order by </span>
                        <select value={this.state.sortBy} onChange={(e) => this.sortBy(e.target.value)}>
                            <option value="-voteScore">Best score</option>
                            <option value="-timestamp">Most recent</option>
                        </select>
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
    // const match = this.props;
    // const {params} = match;
    // const {categoryName} = params;
    // console.log(params.categoryName);
    // const categoryName = params.categoryName || 'all';
    return {
        categoryName: ownProps.match.params.categoryName || 'all',
        // posts: posts.ids.map(id => posts.entities[id]),
        categories: state.categories.entities,
        categoriesIds: state.categories.ids,
        posts: state.posts.entities,
        postsIds: state.posts.ids,
    }
}
//
// RootScene = withRouter(connect(mapStateToProps)(RootScene));
//
// export default RootScene;

RootScene = withRouter(connect(
    mapStateToProps, { fetchPostsByCategory }
)(RootScene));

export default RootScene;

// export default connect(mapStateToProps)(RootScene);
