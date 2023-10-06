import './App.css'
import LandingPage from './components/LandingPage'
import Movies from './components/Movies'
import Navbar from './components/Navbar'

const App = () => {
   return (
      <>
         <LandingPage />

         <Navbar />
         <div id="movies">
            <Movies />
         </div>
      </>
   )
}

export default App
