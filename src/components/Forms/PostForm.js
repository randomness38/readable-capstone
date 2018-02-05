import React ,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import serializeForm from 'form-serialize'


class PostForm extends Component{

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash :true })
        if(this.props.onFormSubmit){
            this.props.onFormSubmit(values)
            //     .then( ({ p }) => {
            //     this.props.history.push(`/${post.category}/${post.id}`);
            // })
        }
    }


    render(){
        const { post, formName, categories, categoriesIds } = this.props;

        return(
            <div>
                {!post &&
                <div>
                <h3>{formName}</h3>
                <div>
                    <Link to="/" >Back</Link>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" name='title' placeholder='Title'/>
                            <input type="text" name='author' placeholder='Your name'/>
                            <input type="text" name='body' placeholder='Hi There!'/>
                            <div>
                                { categoriesIds !== undefined && categoriesIds.map( categoryId => (
                                    <label
                                        key={categories[categoryId].path}
                                    >
                                        <input type="radio" name="category" value={categories[categoryId]} /> {categories[categoryId]}
                                    </label>
                                ))}
                            </div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>}

                {post &&
                <div>
                    <h3>{formName}</h3>
                    <div>
                        <Link to="/" >Back</Link>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input type="text" name='title' value={post.title} placeholder='Title'/>
                                <input type="text" name='author' value={post.author} placeholder='Your name'/>
                                <input type="text" name='body' value={post.body} placeholder='Hi There!'/>
                                <div>
                                    { categoriesIds !== undefined && categoriesIds.map( categoryId => (
                                        <label
                                            key={categories[categoryId].path}
                                        >
                                            <input type="radio" name="category" value={post.category} /> {categories[categoryId]}
                                        </label>
                                    ))}
                                </div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        )
    }
}

const mapStateToProps  = ({ categories }) => ({
    categories: categories.entities,
    categoriesIds: categories.ids
});

export default withRouter(connect(mapStateToProps)(PostForm));
