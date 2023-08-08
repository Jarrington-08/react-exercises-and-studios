let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  const rating = props.rating;
  return rating <= 5 && rating >= 1 ? <GiveRating rating={rating} /> : null;
}

function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
