import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class PostForm extends Component {

    state = {
        author: "",
        title: "",
        body: "",
        category: ""
    }

    componentDidMount() {
        if( this.props.post !== undefined ) {
            this.setState({
                author: this.props.post.author,
                title: this.props.post.title,
                body: this.props.post.body,
                category: this.props.post.category
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.post !== undefined ) {
            this.setState({
                author: nextProps.post.author,
                title: nextProps.post.title,
                body: nextProps.post.body,
                category: nextProps.post.category
            });
        }
    }

    selectCategory = ( event ) => {
        this.setState({
            category: event.target.value
        });
    }

    // return to previous place
    cancelPostAdd = ( event ) => {
        event.preventDefault();
        if ( this.props.history.action === 'PUSH')
            this.props.history.goBack()
        else
            this.props.history.push("/");
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {
        const { onFormSubmit, formHeaderTitle, categories, categoryIds  } = this.props;

        return (
            <div>



            <form className='add-post-form' onSubmit={ onFormSubmit }>
                <div>
                    <h4>{ formHeaderTitle }</h4>
                </div>
                <div>
                    <div>
                        <label htmlFor="author">Name</label>
                        <input
                            className="add-post__input"
                            type="text"
                            name="author"
                            placeholder="Your name"
                            value={this.state.author}
                            onChange={ e => this.handleInputChange(e) }
                            required />
                    </div>
                    <div>
                        <label htmlFor="title">Post Title</label>
                        <input
                            className="add-post__input"
                            type="text"
                            name="title"
                            value={this.state.title}
                            placeholder="The next big thing is..."
                            onChange={ e => this.handleInputChange(e) }
                            required />
                    </div>
                    <div>
                        <label htmlFor="body">Content</label>
                        <textarea
                            className="add-post__input"
                            name="body"
                            rows="3"
                            value={this.state.body}
                            placeholder="lorem ipsum..."
                            onChange={ e => this.handleInputChange(e) }
                            required
                        >
            </textarea>
                    </div>
                    <div className="filters">
                        <label className='filters__title'>Select Category</label>
                        <div className="filter">
                            <div>
                                { categories!== undefined && categoryIds.map( Id => (
                                    <label
                                        key={categories[Id].path}
                                        onClick={this.selectCategory}
                                        className='filter'
                                    >
                                        <input className='filter__radio' type="radio" name="category" value={categories[Id].name} />
                                        <span
                                            className={ "filter__label--" + ( this.state.category === categories[Id].name ? `${categories[Id].name }` : "")}
                                        >
                                        {categories[Id].name}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                            onClick={this.cancelPostAdd}
                    >Cancel</button>
                    <button
                            disabled={ ! this.state.category }
                    >Save Post</button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps  = ({ categories }) => ({
    categories: categories.entities,
    categoryIds: categories.ids
});

export default withRouter(connect(mapStateToProps)(PostForm));
