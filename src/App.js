import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'

console.log('key',process.env.REACT_APP_API_KEY);
const API_KEY = process.env.REACT_APP_API_KEY;
class App extends React.Component {
  state = {
    base_URL: 'https://api.spoonacular.com/recipes/search',
    recipes: [],
    recipeDetails: false,
    searchRecipeId:'',
    ingredients: [],
    instructions: [],
    searchValue:'',
    query:'chicken',
    summary: '',
    searchImageUrl: '',
    searchTitle: '',
    recipeInformation: {}
  }

  getRecipes = () => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${this.state.query}&number=10`)
    .then(response=>response.json())
    .then(data=>{
      console.log('data:',data);
      this.setState({recipes: data});
    })
  }
  componentDidMount(){
    this.getRecipes();
  }

  backToRecipes = () => {
    this.setState({recipeDetails: false})
  }

  apiCalls = () => {
    let url1 = `https://api.spoonacular.com/recipes/${this.state.searchRecipeId}/ingredientWidget.json?apiKey=${API_KEY}`;
    let url2 = `https://api.spoonacular.com/recipes/${this.state.searchRecipeId}/analyzedInstructions?apiKey=${API_KEY}`;
    let url3 = `https://api.spoonacular.com/recipes/${this.state.searchRecipeId}/summary?apiKey=${API_KEY}`;
    let url4 = `https://api.spoonacular.com/recipes/${this.state.searchRecipeId}/information?apiKey=${API_KEY}`;
    Promise.all([fetch(url1), fetch(url2),  fetch(url3), fetch(url4)])
    .then(([response1, response2, response3, response4])=> Promise.all([response1.json(), 
                                                                        response2.json(), 
                                                                        response3.json(), 
                                                                        response4.json()]))
    .then(([data1, data2, data3, data4])=> this.setState({ingredients: data1.ingredients, 
                                                          instructions: data2, 
                                                          summary: data3.summary, 
                                                          recipeInformation: data4}))
  }

  showDetailsHandler=(id, imageUrl, title)=> {
    this.setState(()=>{return {searchRecipeId: id, 
                              recipeDetails:true, 
                              searchImageUrl: imageUrl, 
                              searchTitle: title}}, 
                              this.apiCalls);
    /*this.setState(()=>{return {searchRecipeId: id, recipeDetails:true}}, ()=>{
      fetch(`https://api.spoonacular.com/recipes/${this.state.searchRecipeId}/ingredientWidget.json?apiKey=${API_KEY}`)
        .then(response=>response.json())
        .then(data=>{
        this.setState({ingredients: data.ingredients});
      });
      fetch(`https://api.spoonacular.com/recipes/${this.state.searchRecipeId}/analyzedInstructions?apiKey=${API_KEY}`)
        .then(response=>response.json())
        .then(data=>{
        this.setState({instructions: data});
      })
    });*/
  }

  handleChange = (e) => {
    this.setState({searchValue: e.target.value});
  }
 
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(()=>{return {query: this.state.searchValue}},
    ()=>{
      this.getRecipes();
    });
  }
  render(){
    console.log(this.state);
    let componentToRender =  <RecipeList recipes={this.state.recipes} 
                                         searchValue={this.state.searchValue}
                                         showDetailsHandler={this.showDetailsHandler}
                                         handleChange={this.handleChange}
                                         handleSubmit={this.handleSubmit}
                                         />;
    if(this.state.recipeDetails){
      componentToRender = <RecipeDetails searchRecipeId={this.state.searchRecipeId} 
                                         ingredients={this.state.ingredients} 
                                         backToRecipes={this.backToRecipes}
                                         instructions={this.state.instructions}
                                         summary={this.state.summary}
                                         imageUrl={this.state.searchImageUrl}
                                         title={this.state.searchTitle}
                                         recipeInformation={this.state.recipeInformation}/>
    }
    return (
      <React.Fragment>
       {componentToRender}
      </React.Fragment>
    );
  }
}

export default App;
