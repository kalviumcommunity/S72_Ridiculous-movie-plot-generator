import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/landing'
import MoviePlots from './Pages/movies'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/movieplot' element={<MoviePlots/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
