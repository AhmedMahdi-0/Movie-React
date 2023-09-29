import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/movie-detail/:id" element={<MovieDetail />}/>

        <Route></Route>
     
        
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
