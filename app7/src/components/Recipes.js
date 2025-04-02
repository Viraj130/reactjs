const { useState, useEffect } = require("react");


function Recipes() {
    let [myRecipes, setMyRecipes] = useState([]);
    let APIURL ="https://dummyjson.com/recipes";

    //Call API[]
    useEffect(()=> {
        fetch(APIURL).then((response) => {
          response.json().then((result) => {
              setMyRecipes(result.recipes);
          })
        });
    }, []);

    return<>
     <h1>Recipes</h1>
     <table className="table table-hover table-striped">
       <thead className="table-dark">
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Body</th>
                <th>Reactions</th>
                <th>Views</th>
                <th>ReviewCount</th>
                <th>Image</th>
             </tr>
       </thead>

            <tbody>
                {
                    myRecipes.map((recipe, index) =><tr key={index}>
                        <td>{recipe.id}</td>
                        <td>{recipe.name}</td>
                        <td>{recipe.instructions}</td>
                        <td>{recipe.prepTimeminutes}</td>
                        <td>{recipe.cookTimeMinutess}</td>
                        <td>{recipe.servings}</td>
                        <td>{recipe.rating}</td>
                        <td>{recipe.reviewCount}</td>
                        <td><img src={recipe.image} className="w-110 h-110" alt=""/></td>
                    </tr>)
                }
            </tbody>
     </table>
    </>
}   

export default Recipes;