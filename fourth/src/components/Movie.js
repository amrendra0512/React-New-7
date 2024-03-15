function Movie (props) {

    return (
        <>
        <h3>{props.type}</h3>
        <img src={props.movieImg}/>
        {props.name}
        </>
    )
}
export default Movie;