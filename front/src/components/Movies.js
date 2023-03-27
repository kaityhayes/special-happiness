
const Movies = (props) => {
  


    return(
      
     <>
     <div className='Scroll'>
       <h3>Title: {props.movie.title}</h3>
       <img src={props.movie.image}/>
       <p>Release Date: {props.movie.release}</p>
      
        <p>Actors: {props.movie.actor}</p>
      
       <p>Rating: {props.movie.rating}</p>
       <p>Genre: {props.movie.genre}</p>
       </div> 
     </>
    
    )

 };
 
 export default Movies