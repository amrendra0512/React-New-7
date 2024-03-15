import './Books.css'


function Books(props) {
  const { bookName, image, price } = props;
  return (
    <>
      <div className="books">
        <img src={image} />
        <h3>{bookName}</h3>
        <h3>{price}</h3>
      </div>
     
    </>
  );
}

export default Books;
