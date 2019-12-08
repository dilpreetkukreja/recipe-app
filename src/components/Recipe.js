import React from 'react';
import classes from './Recipe.module.css';

const recipe = (props) => {
    console.log(props);
    return (
        <div className="card">
                <img src={props.recipe.image} className="card-img-top img-fluid" alt={props.recipe.title} />
                <div className="card-body">
                    <h5 className="card-title text-uppercase" style={{color: 'rgb(253,159,0)'}}>{props.recipe.title}</h5>
                    {/*<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>*/}  
                </div>
                <div className="d-flex justify-content-start card-footer" style={{fontSize:'14px', paddingLeft:'20px'}} >
                    <button className="border-danger text-danger mr-2" 
                            onClick={()=>props.showDetailsHandler(props.recipe.id, props.recipe.image, props.recipe.title)}
                            >View Details
                    </button> 
                </div>
        </div>
    );
}

export default recipe;