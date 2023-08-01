import './styles.css';



function Button() {
   function onLearnMore() {
      alert("splish splash");
   };

   return ( 
      <button onClick={onLearnMore}>
         Learn More
      </button>
   );
}

export default Button;