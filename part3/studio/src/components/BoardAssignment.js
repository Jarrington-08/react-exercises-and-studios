import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "Southern Cooking",
         value: "Southern Cooking"
      },
      {
         label: "Creole Recipes",
         value: "Creole Recipes"
      },
      {
         label: "Louisiana",
         value: "Louisiana"
      },
   ];
   const [boardName, setBoardName] = useState("no boards yet!");
   
   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map((board) => <option key={board.value}>{board.label}</option>)};
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}