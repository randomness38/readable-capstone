import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import AddPost from './components/AddPost';
import PostEdit from './components/PostEdit';

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={PostList} />
                    <Route exact path="/new" component={AddPost} />
                    <Route exact path="/edit/:id" component={PostEdit} />
                    <Route exact path="/:category" component={PostList} />
                    <Route exact path="/:category/:id" component={PostDetails} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App)
