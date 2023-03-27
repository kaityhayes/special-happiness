const Movies = (props) => {
    return(
     <>
       <h3>Title: {props.movie.title}</h3>
       <img src={props.movie.image}/>
       <p>Release Date: {props.movie.release}</p>
       <ul>
        {props.movie.actors.map(actor => (
          <li key={actor}>{actor}</li>
        )) }
       </ul>
       <p>Rating: {props.movie.rating}</p>
       <ul>
        {props.movie.genre.map(gen => (
          <li key={gen}>{gen}</li>
        ))}
       </ul>
     </>
    )
 }
 
 export default Movies