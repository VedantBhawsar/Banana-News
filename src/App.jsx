import Footer from "./assets/Footer"
import NavBar from "./assets/NavBar"
import News from "./assets/News"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const apikey = 'd32bdc6b771c45b48ff94ec377af6c43';

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<News key="/" category='general' apikey={apikey} />} />
          <Route path="/home" exact element={<News key="home" category='general' apikey={apikey} />} />
          <Route path="/business" exact element={<News key="business" category='business' apikey={apikey} />} />
          <Route path="/entertainment" exact element={<News key="entertainment" category='entertainment' apikey={apikey} />} />
          <Route path="/health" exact element={<News key="health" category='health' apikey={apikey} />} />
          <Route path="/science" exact element={<News key="science" category='science' apikey={apikey} />} />
          <Route path="/sports" exact element={<News key="sports" category='sports' apikey={apikey} />} />
          <Route path="/technology" exact element={<News key="technology" category='technology' apikey={apikey} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
