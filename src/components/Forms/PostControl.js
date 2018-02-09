import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';

//

const PostControl = ({ post, onDelete, onSendVote, onBack }) => (
    <div className='post-control-container'>
        <div>
            {/*VOTE PLACE*/}
            <div>


                <a
                    // className='far fa-thumbs-up'
                    onClick={(e) => {
                        e.preventDefault();
                        onSendVote(post.id,"upVote",'posts')
                    }}
                >Up </a>


                <Button bsSize="small">
                    <Glyphicon glyph="star" /> {post.voteScore}
                </Button>

                <a
                    onClick={(e) => {
                        e.preventDefault();
                        onSendVote(post.id,"downVote",'posts')

                    }}
                > Down</a>

            </div>

            <Link to={`/edit/post/${post.id}`}>
                <button className='edit-button'>Edit</button>
            </Link>

            <button
                className='delete-button'
                onClick={ e => {
                    e.preventDefault();
                    onDelete(post.id)
                    if (onBack) onBack()
                }}

            >Delete</button>
        </div>
    </div>
)
//
// class PostControl extends Component {
//
//     render () {
//
//         const { post, onDelete, onSendVote, onBack } = this.props;
//         return (
//             <div className='post-control-container'>
//                 <div>
//                     {/*VOTE PLACE*/}
//                     <div>
//
//
//                         <a
//                             // className='far fa-thumbs-up'
//                               onClick={(e) => {
//                             e.preventDefault();
//                             onSendVote(post.id,"upVote",'posts')
//                         }}
//                           >Up </a>
//
//
//                         <Button bsSize="small">
//                             <Glyphicon glyph="star" /> {post.voteScore}
//                         </Button>
//
//                         <a
//                            onClick={(e) => {
//                             e.preventDefault();
//                             onSendVote(post.id,"downVote",'posts')
//
//                         }}
//                         > Down</a>
//
//                     </div>
//
//                     <Link to={`/edit/post/${post.id}`}>
//                         <button className='edit-button'>Edit</button>
//                     </Link>
//
//                     <button
//                         className='delete-button'
//                         onClick={ e => {
//                             e.preventDefault();
//                             onDelete(post.id)
//                             if (onBack) onBack()
//                         }}
//
//                     >Delete</button>
//                 </div>
//             </div>
//         );
//     }
// }

export default PostControl;
