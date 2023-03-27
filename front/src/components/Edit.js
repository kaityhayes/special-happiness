import {useState} from 'react'

const Edit = (props) => {
  const [movie, setMovie] = useState({...props.movie})

  const handleChange = (event) => {
    setMovie({...movie, [event.target.name]: event.target.value})
   };

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(movie)
   };

  return(
    <>
      <details>
        <summary>Edit Movie</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>title: </label>
          <input type='text' name='title' onChange={handleChange} value={movie.title}/>
          <br/>
          <label htmlFor='release'>Release Date: </label>
          <input type='number' name='release' onChange={handleChange} value={movie.release}/>
          <br />
          <label htmlFor='actors'>Starring: </label>
          <input type='text' name='actors' onChange={handleChange} value={movie.actors}/>
          <br />
          <label htmlFor='genre'>Genre: </label>
          <input type='text' name='genre' onChange={handleChange} value={movie.genre}/>
          <label htmlFor='rating'>Rating: </label>
          <input type='text' name='rating' onChange={handleChange} value={movie.rating}/>
          <br />
          <br />
          <input type="submit"/>
        </form>
      </details>
    </>
  )
};

export default Edit
