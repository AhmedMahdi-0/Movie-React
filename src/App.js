import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WatchList from "./components/Watchlist";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/search/:title" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
