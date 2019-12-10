import React from 'react';
import Recipe from './Recipe';
import classes from './RecipeList.module.css';

const recipeList = (props) => {
    return (
        <React.Fragment>
            <header style={{textAlign:'center'}} className={classes.heading}><div>Recipe Search</div></header>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <form onSubmit={props.handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" 
                                    onChange={props.handleChange}
                                    value={props.searchValue}
                                    className="form-control" 
                                    placeholder="Enter ingredients...(separated by comma)" 
                                    aria-label="input field" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button type='submit' className="input-group-text" id="basic-addon2">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={classes.cardDeck}>
                            {props.recipes.map(recipe => <Recipe key={recipe.title} 
                                                                recipe={recipe} 
                                                                showDetailsHandler={props.showDetailsHandler }
                                                        />)
                            }
                </div>       
        </div>

        </React.Fragment>
       
    );
}

export default recipeList;