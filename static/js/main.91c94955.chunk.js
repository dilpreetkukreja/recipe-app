(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,function(e,t,a){e.exports={title:"RecipeDetails_title__1XDJL",heading:"RecipeDetails_heading__3O5h6",button:"RecipeDetails_button__1lNsA",sideDish:"RecipeDetails_sideDish__357WT"}},,,,,,function(e,t,a){e.exports={cardDeck:"RecipeList_cardDeck__2MeF5",heading:"RecipeList_heading__3oYNT"}},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports={cardImage:"Recipe_cardImage__WR9oa"}},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),s=(a(16),a(8)),l=a(2),o=a(3),m=a(5),p=a(4),u=a(6),h=(a(17),a(18),function(e){return console.log(e),c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:e.recipe.image,className:"card-img-top img-fluid",alt:e.recipe.title}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-uppercase",style:{color:"rgb(253,159,0)"}},e.recipe.title)),c.a.createElement("div",{className:"d-flex justify-content-start card-footer",style:{fontSize:"14px",paddingLeft:"20px"}},c.a.createElement("button",{className:"border-danger text-danger bg-white mr-2",onClick:function(){return e.showDetailsHandler(e.recipe.id,e.recipe.image,e.recipe.title)}},"View Details")))}),d=a(7),g=a.n(d),f=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{style:{textAlign:"center"},className:g.a.heading},c.a.createElement("div",null,"Recipe Search")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-6 mx-auto"},c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",onChange:e.handleChange,value:e.searchValue,className:"form-control",placeholder:"Enter ingredients...(separated by comma)","aria-label":"input field","aria-describedby":"basic-addon2"}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{type:"submit",className:"input-group-text",id:"basic-addon2"},"Submit")))))),c.a.createElement("div",{className:g.a.cardDeck},e.recipes.map((function(t){return c.a.createElement(h,{key:t.title,recipe:t,showDetailsHandler:e.showDetailsHandler})})))))},E=a(1),b=a.n(E),y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.summary,t="";this.props.recipeInformation.dishTypes&&(t=this.props.recipeInformation.dishTypes.map((function(e,t){return e})).join(", "));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("p",{className:b.a.title},this.props.title),c.a.createElement("hr",null),c.a.createElement("div",{className:"row justify-content-center mb-2"},c.a.createElement("div",{className:"col-md-10 align-items-center d-flex mb-2",style:{height:"64px"}},c.a.createElement("div",{className:"mr-2 mt-1"},c.a.createElement("strong",{style:{color:"rgb(253,159,0)"}},"YIELD")," ",this.props.recipeInformation.servings," servings"),c.a.createElement("div",{className:"mt-1"},c.a.createElement("strong",{style:{color:"rgb(253,159,0)"}},"TIME")," ",this.props.recipeInformation.readyInMinutes," minutes"),c.a.createElement("button",{className:"ml-auto ".concat(b.a.button),onClick:this.props.backToRecipes},"Back to All Recipes")),c.a.createElement("div",{className:"col-md-6 col-lg-4"},c.a.createElement("img",{className:"mb-2",src:this.props.imageUrl,alt:this.props.title})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-6 col-lg-4"},c.a.createElement("h1",{className:b.a.heading},"Ingredients"),c.a.createElement("hr",null),c.a.createElement("ul",{style:{listStyle:"none"}},this.props.ingredients.map((function(e,t){return c.a.createElement("li",{key:t},e.amount.us.value," ",e.amount.us.unit," ",e.name)})))),c.a.createElement("div",{className:"col-md-6"},this.props.instructions.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:b.a.heading},"Instructions"),c.a.createElement("hr",null),this.props.instructions.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("h4",null,e.name),c.a.createElement("ol",null,e.steps.map((function(e,t){return c.a.createElement("li",{key:t},e.step)}))))}))):null)),c.a.createElement("hr",null),this.props.recipeInformation.dishTypes?c.a.createElement("div",{className:"row",style:{flexDirection:"column"}},c.a.createElement("h1",{className:b.a.heading},"Dish Type"),c.a.createElement("p",{className:b.a.sideDish},t)):null,c.a.createElement("div",{className:"row"},c.a.createElement("a",{target:"_blank",without:!0,rel:"noopener noreferrer",className:b.a.button,href:this.props.recipeInformation.sourceUrl},"Go to Recipe Website"),c.a.createElement("button",{className:b.a.button,onClick:this.props.backToRecipes},"Back to All Recipes"))))}}]),t}(c.a.Component);console.log("key","18d424ea5a5d4c1f9282db50e48d7cd2");var v="18d424ea5a5d4c1f9282db50e48d7cd2",N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={base_URL:"https://api.spoonacular.com/recipes/search",recipes:[],recipeDetails:!1,searchRecipeId:"",ingredients:[],instructions:[],searchValue:"",query:"chicken",summary:"",searchImageUrl:"",searchTitle:"",recipeInformation:{}},a.getRecipes=function(){fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=".concat(v,"&ingredients=").concat(a.state.query,"&number=10")).then((function(e){return e.json()})).then((function(e){console.log("data:",e),a.setState({recipes:e})}))},a.backToRecipes=function(){a.setState({recipeDetails:!1})},a.apiCalls=function(){var e="https://api.spoonacular.com/recipes/".concat(a.state.searchRecipeId,"/ingredientWidget.json?apiKey=").concat(v),t="https://api.spoonacular.com/recipes/".concat(a.state.searchRecipeId,"/analyzedInstructions?apiKey=").concat(v),n="https://api.spoonacular.com/recipes/".concat(a.state.searchRecipeId,"/summary?apiKey=").concat(v),c="https://api.spoonacular.com/recipes/".concat(a.state.searchRecipeId,"/information?apiKey=").concat(v);Promise.all([fetch(e),fetch(t),fetch(n),fetch(c)]).then((function(e){var t=Object(s.a)(e,4),a=t[0],n=t[1],c=t[2],i=t[3];return Promise.all([a.json(),n.json(),c.json(),i.json()])})).then((function(e){var t=Object(s.a)(e,4),n=t[0],c=t[1],i=t[2],r=t[3];return a.setState({ingredients:n.ingredients,instructions:c,summary:i.summary,recipeInformation:r})}))},a.showDetailsHandler=function(e,t,n){a.setState((function(){return{searchRecipeId:e,recipeDetails:!0,searchImageUrl:t,searchTitle:n}}),a.apiCalls)},a.handleChange=function(e){a.setState({searchValue:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState((function(){return{query:a.state.searchValue}}),(function(){a.getRecipes()}))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){console.log(this.state);var e=c.a.createElement(f,{recipes:this.state.recipes,searchValue:this.state.searchValue,showDetailsHandler:this.showDetailsHandler,handleChange:this.handleChange,handleSubmit:this.handleSubmit});return this.state.recipeDetails&&(e=c.a.createElement(y,{searchRecipeId:this.state.searchRecipeId,ingredients:this.state.ingredients,backToRecipes:this.backToRecipes,instructions:this.state.instructions,summary:this.state.summary,imageUrl:this.state.searchImageUrl,title:this.state.searchTitle,recipeInformation:this.state.recipeInformation})),c.a.createElement(c.a.Fragment,null,e)}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);r.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.91c94955.chunk.js.map