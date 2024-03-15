import Movie from "./Movie";
import './Movie.css';
import imag from '../images/Kathal.jpg';

let movieType = ['Comedy Movie','Horror Movie', 'Drama', 'Spy','Action']
let images = [imag,imag,imag,imag,imag]
let movieName = ['Kathal', 'Kathal','Kathal', 'Kathal', 'Kathal'];

function MovieList () {

    return (
        <>
        <div className='image-tag'>

        {images.map((img,ind)=>(
             <Movie movieImg = {img} name={movieName[ind]} type={movieType[ind]} key= {ind}/>
        )

        )}
        </div>
      
       
        </>
    )

}
export default MovieList;