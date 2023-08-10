import data from './../data.json';
import { useState } from 'react';

function MyProjects() {
    const [index, setIndex] = useState(0);
    let currentItem = data.MyProjects[index];
    function handleClick() {
        if (index < data.MyProjects.length-1)
        {
            setIndex(index + 1);
        }
        else
        {
            setIndex(0);
        }
    }
    return (
        <>
        <div>
            <h2>Games I want to Replay</h2>
            <button onClick={handleClick}>
                Next
            </button>
                <div>
                    <h3>{currentItem.name}</h3>
                    <img src={currentItem.imageURL} alt={currentItem.name}/>
                    <p>
                        Year released: {currentItem.yearReleased}<br />
                        Platfrom: {currentItem.platform}
                    </p>
        
                </div>
            </div>
        </>
    )
}

export default MyProjects;
