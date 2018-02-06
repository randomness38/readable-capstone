
import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';


class CommentForm extends Component {

    state = {
        author: "",
        body: "",
    }

    // submit 누르면 도킹 받아먹는애가 없는데??

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



    componentWillReceiveProps(nextProps) {
        if( this.props.isEditing ) {
            this.setState({
                author: nextProps.comment.author,
                body: nextProps.comment.body,
            });
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {
        const { onFormSubmit } = this.props;
        // const { author, body } = this.state;

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
