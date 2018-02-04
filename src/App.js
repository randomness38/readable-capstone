import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';


import RootScene from './components/RootScene';
import AddPostScene from "./components/AddPostScene";
import EditPostScene from "./components/EditPostScene";
import PostDetailScene from "./components/PostDetailScene";
import {fetchPosts} from "./actions/posts";
import {fetchCategories} from "./actions/categories";

// Root
class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchPosts());
        dispatch(fetchCategories());
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        {/*<Route exact path="/" component={RootScene}/>*/}
                        <Route
                            exact path='/'
                            render={ () => (
                                <RootScene
                                    category='all'
                                />
                            )}
                        />
                        <Route
                            key={'category-route'}
                            exact path='/category/:categoryName'
                            render={({match}) => ( <RootScene categoryName={ match.params.categoryName}/>)}
                        />
                        {/*<Route exact path="/category/:categoryName" component={RootScene}/>*/}
                        <Route exact path="/add/post" component={AddPostScene}/>
                        <Route exact path="/edit/post/:idPost" component={EditPostScene}/>
                        <Route
                            key='category-post-details-route'
                            exact path={`/:category/:idPost`}
                            render={({match}) => (
                                <PostDetailScene
                                    category={ match.params.category}
                                    idPost={ match.params.idPost}
                                />
                            )}
                        />
                        {/*<Route exact path="/:category/:idPost" component={PostDetailScene}/>*/}
                    </Switch>

                    <ToastContainer
                        position="top-right"
                        type="default"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        pauseOnHover
                    />

                </div>
            </BrowserRouter>
        );
    }

}

function mapStateToProps(state){
    return {
        categories: state.categories.entities,
        categoriesIds: state.categories.ids,
    }
}

export default connect(mapStateToProps)(App);
