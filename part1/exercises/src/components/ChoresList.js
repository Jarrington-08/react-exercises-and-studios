import classes from './ChoresList.module.css';

export default function ChoresList () {
   let heading = "My chores:";
   let chore1 = "LC homework";
   let chore2 = "Take out the trash";
   let chore3 = "Clean car";
   return (
      <div>
         <h3 className = {classes.choresHeading}>{heading}</h3>
            <p>
               <ol className = {classes.choresText}>
                  <li>{chore1}</li>
                  <li>{chore2}</li>
                  <li>{chore3}</li>
               </ol>
            </p>
      </div>
   )
}