import {useState} from 'react'

const Add = (props) => {
   const [movie, setMovie] = useState({title: '', release: '', genre: '', rating: '', actor: ''})
   const [revealContent, setRevealContent] = useState(false)



   const handleChange = (event) => {
    setMovie({...movie, [event.target.name]: event.target.value})
  };
  
  const handleSubmit = (event) => {
     event.preventDefault()
     props.handleCreate(movie)
  };



  

   return(
    <>
    <details>
     <summary>Add Movie</summary>
       <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Title:</label>
    <input type='text' name='title' onChange={handleChange}/>
    <br/>
    <br/>
    <label htmlFor='release'>Release Date:</label>
    <input type='text' name='release' onChange={handleChange}/>
    <br />
    <label htmlFor='actor'>Staring:</label>
    <input type='text' name='actor' onChange={handleChange}/>
    <br/>
    <label htmlFor='genre'>Genre:</label>
    <input type='text' name='genre' onChange={handleChange}/>
    <br />
    <label htmlFor='rating'>Rating:</label>
    <input type='text' name='rating' onChange={handleChange}/>

    <input type="submit"/>
  </form>
  </details>
    </>
   )
};

export default Add