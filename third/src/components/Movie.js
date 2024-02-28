const Movie = (props) => {
    // console.log(props);

    return (
        <div> <h3>Title : {props.updatedTitle}</h3>
        <img src ={props.imageUrl}/>
        </div>
    )
}

export default Movie;