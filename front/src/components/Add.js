import {useState} from 'react'

const Add = (props) => {
   const [movie, setMovie] = useState({title: '', date: 0})


   const handleChange = (event) => {
    setMovie({...movie, [event.target.name]: event.target.value})
  };
  
  const handleSubmit = (event) => {
     event.preventDefault()
     props.handleCreate(movie)
  };
  




   return(
    <>
      <form>
        <label htmlFor='name'>Title:</label>
        <input type='text' name='title' onChange={handleChange}/>
        <br/>
        <br/>
        <label htmlFor='date'>Release Date:</label>
        <input type='number' name='date' onChange={handleChange}/>
        <br />
        <label htmlFor='stars'>Staring:</label>
        <input type='text' name='staring' onChange={handleChange}/>
        <br/>
        <label htmlFor='genre'>Genre:</label>
        <input type='text' name='genre' onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
   )
};

export default Add