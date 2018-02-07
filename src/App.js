import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
// 왜 안먹히지
import './App.css';
import { ToastContainer } from 'react-toastify';
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
                    {/*<AppHeader />*/}
                    <Switch>
                        {/*<Route exact path="/" component={RootScene}/>*/}
                        <Route
                            exact path='/'
                            render={ () => (
                                <RootScene
                                    render={({match}) => ( <RootScene categoryName='all'/>)}
                                />
                            )}
                        />
                        {/*<Route*/}
                            {/*key={'category-route'}*/}
                            {/*exact path='/category/:categoryName'*/}
                            {/*render={({match}) => ( <RootScene categoryName={ match.params.categoryName}/>)}*/}
                        {/*/>*/}
                        <Route exact path="/category/:categoryName" component={RootScene}/>
                        <Route exact path="/add/post" component={AddPostScene}/>
                        <Route exact path="/edit/post/:idPost" component={EditPostScene}/>
                        {/*<Route*/}
                            {/*key={'edit-post'}*/}
                            {/*exact path='/edit/post/:idPost'*/}
                            {/*render={({match}) => ( <EditPostScene idPost={ match.params.idPost }/>)}*/}
                        {/*/>*/}
                        {/* 도킹안하니까 먹히네 얘는? 이거 뭐지.. 라우터 공부 더 해야겠다*/}
                        {/*<Route*/}
                            {/*key='category-post-details-route'*/}
                            {/*// category 에 붙어있던 : 얘 지워버림 다른데서 match해서 쓸거 같긴 한데...헤헤..일단은ㅇ*/}
                            {/*exact path='/:category/:idPost'*/}
                            {/*render={({match}) => ( <PostDetailScene idPost={ match.params.idPost }/>)}*/}
                        {/*/>*/}
                        <Route exact path="/:category/:idPost" component={PostDetailScene}/>
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
