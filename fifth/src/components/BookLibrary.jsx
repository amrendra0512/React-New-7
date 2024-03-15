import BookList from "./BookList";
import { dataList } from "./Constant";

function BookLibrary() {
  return (
    <>
      {dataList.map((val, ind) => (
        <BookList bookType={val.bookType} books={val.books} key={ind} > data list is big deal </BookList>
      ))}
    </>
  );
}

export default BookLibrary;
