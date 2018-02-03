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
                    <Route exact path='/' component={PostItemList} />
                    <Route exact path="/new" component={AddPost} />
                    <Route exact path="/edit/:id" component={EditPost} />
                    <Route exact path="/:category" component={PostItemList} />
                    <Route exact path="/:category/:id" component={PostDetails} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App)
