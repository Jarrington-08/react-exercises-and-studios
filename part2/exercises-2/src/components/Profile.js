import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


function Profile() {
      const listItems = oceans.map((ocean) => (
         <>
            <div key={ocean.id} className={`${ocean.fishCheck === 'true' ? "isAFish" : "profile"}`}>
               <img src={ocean.image} alt={ocean.name} className="img"/>
               <ol>
                  <li>
                     {ocean.fact1}
                  </li>
                  <li>
                     {ocean.fact2}
                  </li>
                  <li>
                     {ocean.fact3}
                  </li>
               </ol>
               <Button />
            </div>
         </>  
      )
   );
   return listItems;
};

export default Profile;
