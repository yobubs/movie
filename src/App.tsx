import './App.css'
import Footer from './components/Footer'
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
         <Footer />
      </>
   )
}

export default App
