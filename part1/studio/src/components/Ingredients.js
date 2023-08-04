import styles from './Ingredients.module.css';

function RecipeIngredients() {
    const topFive = ["2lbs Ground Chuck or Ground Beef","2 Tbsp Gourmet Burger Seasoning",
                    "1 tbsp Worcestershire Sauce","1/4 cup BBQ Sauce","Lauren's Secret Sauce"];
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{topFive[0]}</li>
           <li>{topFive[1]}</li>
           <li>{topFive[2]}</li>
           <li>{topFive[3]}</li>
           <li>{topFive[4]}</li>
        </ul>
     </div>
    )
}

export default RecipeIngredients;