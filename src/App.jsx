import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
function App() {
  return (
    <>
   
      <h1 >learn React </h1>
      <h2 className="text-center ">بسم الله الرحمن الرحيم</h2>
    <Navbar/>

    <Home/>
    <ul>
        <li>Hom</li>
        <li>About</li>
        <li>Count</li>
      </ul>
    <Footer/>
    </>
  )
}

export default App 