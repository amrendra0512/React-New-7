import Books from "./Books";
import './BookList.css'

function BookList(props) {
  return (
    <>
      <h2>{props.bookType}</h2>

      <div className="bookList">
      {props.books?.map((books, ind) => (
        <Books
          bookName={books.bookName}
          image={books.image}
          price={books.price}
          key={ind}
        />
      ))}
      </div>

     
    </>
  );
}

export default BookList;
