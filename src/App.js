// import React, { Component } from 'react';
// import { Switch, Route, withRouter } from 'react-router-dom';
// import EditPostScene from './components/EditPostScene';
// import PostItemList from './components/PostItemList';
// import PostDetailScene from './components/PostDetailScene';
// import RootScene from './components/RootScene';
// import AddPostScene from './components/AddPostScene';
//
// class App extends Component {
//
//     render() {
//         return (
//             <div className="app">
//                 {/*<Switch>*/}
//                     {/*<Route exact path="/" component={AppHeader} />*/}
//                     {/*<Route path="/:category?" component={AppHeader} />*/}
//                 {/*</Switch>*/}
//                 <EditPostScene />
//                 <Switch>
//                     <Route exact path='/' component={PostItemList} />
//                     <Route exact path="/new" component={RootScene} />
//                     <Route exact path="/edit/:id" component={AddPostScene} />
//                     <Route exact path="/:category" component={PostItemList} />
//                     <Route exact path="/:category/:id" component={PostDetailScene} />
//                 </Switch>
//             </div>
//         );
//     }
// }
//
// export default withRouter(App)

//new ver

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';


import RootScene from './components/RootScene';
import AddPostScene from "./components/AddPostScene";
import EditPostScene from "./components/EditPostScene";
import PostDetailScene from "./components/PostDetailScene";

// import {fetchUserName} from "./user/actions/index";
import {fetchPosts} from "./actions/posts";
import {fetchCategories} from "./actions/categories";

// Root
class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        // dispatch(fetchUserName());
        dispatch(fetchPosts());
        dispatch(fetchCategories());
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={RootScene}/>
                        <Route exact path="/category/:categoryName" component={RootScene}/>
                        <Route exact path="/add/post" component={AddPostScene}/>
                        <Route exact path="/edit/post/:idPost" component={EditPostScene}/>
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



export default connect()(App);
