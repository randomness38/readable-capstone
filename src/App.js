import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import RootScene from './components/RootScene';
import AppHeader from './components/RootScene/AppHeader';
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
                        <Route exact path="/" component={AppHeader} />
                        <Route path="/category/:categoryName?" component={AppHeader} />
                    </Switch>
                    <Switch>
                        <Route
                            exact path='/'
                            render={ () => (
                                <RootScene
                                    render={({match}) => ( <RootScene categoryName='all'/>)}
                                />
                            )}
                        />
                        <Route exact path="/category/:categoryName" component={RootScene}/>
                        <Route exact path="/add/post" component={AddPostScene}/>
                        <Route exact path="/edit/post/:idPost" component={EditPostScene}/>
                        <Route exact path="/:category/:idPost" component={PostDetailScene}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }

}

const mapStateToProps = ({categories}) => {
    return {
        categories: categories.entities,
        categoriesIds: categories.ids,
    }
}

export default connect(mapStateToProps)(App);
