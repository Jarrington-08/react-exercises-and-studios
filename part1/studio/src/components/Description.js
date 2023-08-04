import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() { 
return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={"https://laurenslatest.com/wp-content/uploads/2023/05/Katie-Laurens-Latest.jpg"} 
       alt = "Lauren of Lauren's Latest and author of the recipe" className={styles.imageUpdates} />
       <div>
          <h3>{"Lauren"}</h3>
          <a href={"https://laurenslatest.com/"}>Chef Lauren's Cooking Website</a> 
       </div>
    </div>
 );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>The Best Burger Recipe</h1>
                    <p>The best burger you'll make with Chef Lauren's Secret Sauce</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;