const RecipeAuthor = () => {
   let authorLink = "https://kennethtemple.com/about";
   let authorPhoto = "https://kennethtemple.com/wp-content/uploads/2018/12/ChefKENNETH-CONTACT.png";
   let authorName = "Kenneth Temple";

   return (
      <div>
         <img src={authorPhoto} alt = "Chef Kenneth Temple" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["smoked beef sausage","seasoning blend","6 oz. tomato paste","cayenne","rice"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>CREOLE JAMBALAYA RECIPE</h1>
            <p>Authentic Creole Jambalaya</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://kennethtemple.com/wp-content/uploads/2019/08/20-minute-jambalaya-683x1024.jpg" alt="Creole Jambalaya" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}