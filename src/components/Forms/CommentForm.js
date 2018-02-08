
import React, { Component } from 'react';
import '../PostDetailScene/PostDetailScene.css';

class CommentForm extends Component {

    state = {
        author: "",
        body: "",
    }

    componentDidMount() {
        if( this.props.isEditing ) {
            this.setState({
                author: this.props.comment.author,
                body: this.props.comment.body,
            });
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {
        const { onFormSubmit } = this.props;

        return (
            <form className="comment-form" onSubmit={ onFormSubmit }>

                <div className="card-footer">
                    <div className="form-group">
                        <label htmlFor="author">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="author"
                            placeholder="Your name"
                            value={this.state.author}
                            onChange={ e => this.handleInputChange(e) }
                            required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="body">Content</label>
                        <textarea
                            className="form-control"
                            name="body"
                            rows="3"
                            value={this.state.body}
                            placeholder="lorem ipsum..."
                            onChange={ e => this.handleInputChange(e) }
                            required
                        >
                        </textarea>
                    </div>

                </div>
                <div className="card-body text-right">
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
