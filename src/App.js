import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/Header';
import PostItemList from './components/PostItemList';
import PostDetails from './components/PostDetails';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

class App extends Component {

    render() {
        return (
            <div className="app">
                {/*<Switch>*/}
                    {/*<Route exact path="/" component={AppHeader} />*/}
                    {/*<Route path="/:category?" component={AppHeader} />*/}
                {/*</Switch>*/}
                <Header />
                <Switch>
                    <Route exact path='/'
                           render={ () => ( <PostItemList category='all'/> )}
                    />
                    <Route exact path="/new" component={AddPost} />
                    <Route exact path="/edit/:id" component={EditPost} />
                    <Route exact path="/:category"
                           render={({match}) => (
                               // 여기서 category 받아서
                               // <Link to={`${post.category}/${post.id}`}> {post.title} </Link> 이거씀
                               <PostItemList
                                   category={ match.params.category}
                               />
                           )}
                    />
                    <Route exact path="/:category/:id"
                           render={({match}) => (
                               <PostDetails
                                   category={ match.params.category}
                                   postId={ match.params.id}
                               />
                           )}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App)
