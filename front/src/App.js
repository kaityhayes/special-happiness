import {useState, useEffect} from 'react'
import axios from 'axios'
import Movies from './components/Movies'
import Add from './components/Add'
import Edit from './components/Edit'
import css from './App.css'


const App = () => {
//STATE
const [movie, setMovie] = useState([])




  const getMovies = () => {
    axios.get('http://localhost:3000/movies')
    .then((response) => setMovie(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  };
  
  const handleCreate = (data) => {
    axios.post('http://localhost:3000/movies', data)
    .then((response) => {
       console.log(response)
       let newMovie = [...movie, response.data]
       setMovie(newMovie)
    })
 };

 const handleDelete = (deletedMovie) => {
  console.log(deletedMovie)
  axios.delete('http://localhost:3000/movies/' + deletedMovie._id)
  .then((response) => {
   let newMovie = movie.filter((Movie) => {
      return movie._id !== deletedMovie._id
   })
  })
 };

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/movies/' + data._id, data)
    .then((response) => {
       console.log(response)
       let newMovie = movie.map((movie) => {
        return movie._id !== data._id ? movie : data
       })
       setMovie(newMovie)
    })
  };
 
 


  useEffect(() => {
    getMovies()
  }, []);


  return (
   
    <div>
      
    {movie.map((movie) => (
 
    <div key={movie._id}>
      
       <Movies movie={movie} />

       <Add handleCreate={handleCreate}/>

       <button onClick={()=>{handleDelete(movie)}}>X</button>

       <Edit Movie={movie} handleEdit={handleEdit}/>
    
    </div>
      ))}

    </div>
    )

};


export default App
