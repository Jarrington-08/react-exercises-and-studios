import classes from './MovieList.module.css';

export default function HobbyLinks() {
    let hobbyLinks = ["www.minecraft.com", "www.beeradvocate.com"];
    return (
        <div>
            <h3 className={classes.movieHeading}>My Hobbies:</h3>
            <ul>
                <li><a href = {hobbyLinks[0]}>My favorite game</a></li>
                <li><a href = {hobbyLinks[1]}>My favorite beverage</a></li>
            </ul>
        </div>
    )
}