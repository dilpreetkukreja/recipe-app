import React from 'react';
import classes from './RecipeDetails.module.css';

class RecipeDetails extends React.Component{
    render(){
        let summary = this.props.summary;
        return (
            <React.Fragment>
                <div className='container'>
                    <p className={classes.title}>{this.props.title}</p>
                    <hr />
                    <div className='row justify-content-center mb-2'>
                         <div className='col-md-10 align-items-center d-flex mb-2' style={{height:'64px'}}>
                            <div className='mr-2 mt-1'><strong style={{color:'rgb(253,159,0)'}}>YIELD</strong> {this.props.recipeInformation.servings} servings</div>
                            <div className='mt-1'><strong style={{color:'rgb(253,159,0)'}}>TIME</strong> {this.props.recipeInformation.readyInMinutes} minutes</div>
                            <button className={`ml-auto ${classes.button}`} onClick={this.props.backToRecipes}>Back to All Recipes</button>
                        </div>
                        
                        <div className='col-md-6 col-lg-4'>
                            <img className='mb-2' src={this.props.imageUrl} alt={this.props.title}/>
                        </div>
                        <div className='col-md-6'>
                            <div dangerouslySetInnerHTML={{ __html:summary }} />
                        </div>
                    </div>
                    <hr />
                    <div className='row justify-content-center'>
                        <div className='col-md-6 col-lg-4'>
                            <h1 className={classes.heading}>Ingredients</h1>
                                    <hr />
                            <ul style={{listStyle:'none'}}>
                                {this.props.ingredients.map((item,index)=>{
                                    return <li key={index}>{item.amount.us.value} {item.amount.us.unit} {item.name}</li>;
                                })}
                            </ul>
                        </div>
                        <div className='col-md-6'>
                                    {this.props.instructions.length?
                            <React.Fragment>
                            <h1 className={classes.heading}>Instructions</h1>
                            <hr />
                                {this.props.instructions.map((item,index1)=>{
                                    return <div key={index1}>
                                        <h4>{item.name}</h4>
                                        <ol>
                                        {item.steps.map((item,index2)=>{
                                        return <li key={index2}>{item.step}</li>
                                        })}
                                        </ol>
                                    </div>;
                                })}
                            </React.Fragment>
                            :null}
                        </div>
                    </div>
                    <hr />
                    {
                        this.props.recipeInformation.winePairing?
                        <div className='row'>
                            <h1 className={classes.heading}>Wine Pairing</h1>
                            <p>{this.props.recipeInformation.winePairing.pairingText}</p>
                        </div>
                        :null
                    }
                    <div className='row'>
                     <a className={classes.button} href={this.props.recipeInformation.sourceUrl}>Go to Recipe Website</a>
                     <button className={classes.button} onClick={this.props.backToRecipes}>Back to All Recipes</button>
                    </div>     
                </div>
            </React.Fragment>
            
        );
    }

}

export default RecipeDetails;