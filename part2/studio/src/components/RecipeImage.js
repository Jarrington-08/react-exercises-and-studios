import "./styling.css";
import recipeData from "./recipe.json";

function RecipeImage() {
  const recipeImage = recipeData.map((data) => (
    <div key={data.name}>
      <img src={data.recipeImage} alt={data.name} className="recipeImage" />
    </div>
  )); 
   return recipeImage;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 