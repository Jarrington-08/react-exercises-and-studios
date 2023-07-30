export default function HobbyLinks() {
    let hobbyLinks = ["www.minecraft.com", "www.beeradvocate.com"];
    return (
        <div>
            <a href = {hobbyLinks[0]}>My favorite game</a>
            <a href = {hobbyLinks[1]}>My favorite beverage</a>
        </div>
    )
}