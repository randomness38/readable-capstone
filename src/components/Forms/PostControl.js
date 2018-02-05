// component 일 필요 없는데?
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {deletePost} from '../../actions/posts';
import * as api from "../../api";

class PostControl extends Component {

    render () {

        const { post, onDeletePost } = this.props;
        // const { post } = this.props;
        console.log(post.id)

        return (
            <div>
                <div>
                    <Link to={`/edit/post/${post.id}`}>
                        <button>Edit Button</button>
                    </Link>
                    {/* 버튼이 자동으로 클릭돼서 모든 포스트가 다 삭제되는 버그 발생 중 */}


                    <button
                        onClick={ e => {
                            e.preventDefault();
                            onDeletePost(post.id)
                        }}

                    >Delete Button</button>
                </div>
            </div>
        );
    }
}

export default PostControl;
