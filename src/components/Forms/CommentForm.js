import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';


class CommentForm extends Component {

    state = {
        author: "",
        body: "",
    }

    componentDidMount() {
        if( this.props.isEditing ) {
            this.setState({
                author: this.props.comment.author,
                // title: this.props.post.title,
                body: this.props.comment.body,
                // category: this.props.post.category
            });
        }
    }

    // TODO: 이건 commentItem 에서 써야지 -> edit 버튼 누를 때 땋!
    // editComment = ( event ) => {
    //     this.setState({
    //         isEditing: true,
    //     });
    // }

    // return to previous place
    // 이 버튼 누르면 'PUSH' 라는 건가??
    // Todo: 이거말고 removeAllText 해서 setState ? 비우는 그런 기능을 넣으면 좋겠는데
    // cancelCommentAdd = ( event ) => {
    //     event.preventDefault();
    //     if ( this.props.history.action === 'PUSH')
    //         this.props.history.goBack()
    //     else
    //         this.props.history.push("/");
    // }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {
        const { onFormSubmit } = this.props;
        const { author, body } = this.state;

        return (
            <form className="PostForm" onSubmit={ onFormSubmit }>

                <div className="card-footer">
                    <div className="form-group">
                        <label htmlFor="author">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="author"
                            placeholder="Your name"
                            value={author}
                            onChange={ e => this.handleInputChange(e) }
                            required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="body">Content</label>
                        <textarea
                            className="form-control"
                            name="body"
                            rows="3"
                            value={body}
                            placeholder="lorem ipsum..."
                            onChange={ e => this.handleInputChange(e) }
                            required
                        >
                        </textarea>
                    </div>

                </div>
                <div className="card-body text-right">
                    {/*<button onClick={this.cancelCommentAdd}*/}
                    {/*>Cancel</button>*/}
                    <button
                    >SAVE</button>
                </div>
            </form>
        );
    }
}

// const mapStateToProps  = ({ categories }) => ({
//     categories: categories.entities,
//     categoryIds: categories.ids
// });

// export default withRouter(connect(mapStateToProps)(CommentForm));
export default CommentForm;
