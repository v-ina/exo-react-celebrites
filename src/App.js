import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EveryStarsPage from "./pages/EveryStarsPage";
import StarsDetailPage from "./pages/StarsDetailPage";
import RandomStarPage from "./pages/RandomStarPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/stars" element={<EveryStarsPage />}/>
        <Route path="/stars/:starID/detail" element={<StarsDetailPage />}/>
        <Route path="/random" element={<RandomStarPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

// je vais recuperer id de tableau stars, pour remplir le parametre d'url 
// /:starID/ c'est parametre d'url, donc chaque stars[i].id va devenir un parametre

export default App;
