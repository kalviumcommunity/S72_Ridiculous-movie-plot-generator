import {useState,useEffect} from 'react'
import GenreCard from '../Components/genreCard'

function Genre() {
    const [genre,setGenre]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/genres")
        .then((res)=>res.json())
        .then((data)=> setGenre(data))
        .catch((err)=>console.error("Error",err))
    },[])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Movie Genres</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {genre.length > 0 ? (
          genre.map((genre) => <GenreCard key={genre._id} {...genre} />)
        ) : (
          <p>Loading genres...</p>
        )}
      </div>
    </div>
  )
}

export default Genre
