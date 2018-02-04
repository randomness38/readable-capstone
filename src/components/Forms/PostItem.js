import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ControlBoard from './ControlBoard';
import { fromNow } from './Setdate';

class PostItem extends Component {
    render () {

        const { post } = this.props;

        return (
            <div>
                <div>
                    <h6>{post.category}</h6>
                    <Link to={`/${post.category}/${post.id}`}>
                        <h4>{post.title}</h4>
                    </Link>
                    <footer>
                        Writte by {post.author}, { fromNow(post.timestamp)}
                    </footer>
                </div>
                <div>
                    {/*<ControlBoard post={post} />*/}
                </div>
            </div>
        );
    }
}

export default PostItem;
