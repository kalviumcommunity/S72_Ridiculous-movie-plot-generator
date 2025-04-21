import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/landing'
import MoviePlots from './Pages/movies'
import Genre from './Pages/genre'
import AddMovie from './Pages/addMovie'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/movieplot' element={<MoviePlots/>}/>
      <Route path='/genres' element={<Genre/>}/>
      <Route path='/add-movie' element={<AddMovie/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
