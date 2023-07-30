export default function BookList() {
   let pageTitle = "Books to Read";
   let book1 = "https://m.media-amazon.com/images/I/41xYsSW6+IL._SY344_BO1,204,203,200_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51FMs3gcjhL._SY346_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51MXUznlr6L._SX329_BO1,204,203,200_.jpg";
   let width = "25%";
   let height = "350em";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Leslie Wolfe's newest release The Surgeon" width={width} height={height} />
         <img src={book2} alt="James Patterson's newest release Obsessed" width={width} height={height} />
         <img src={book3} alt="Johnny Joey Jones' newest release Unbroken Bonds of Battle" width={width} height={height} />
      </div>      
   );
}