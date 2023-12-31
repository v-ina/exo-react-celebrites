import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EveryStarsPage from "./pages/EveryStarsPage";
import StarsDetailPage from "./pages/StarsDetailPage";
import RandomStarPage from "./pages/RandomStarPage";
import SpeakersPage from "./pages/SpeakersPage";
import CopyrightPage from "./pages/CopyrightPage";
import CopyrightPage2 from "./pages/Copyright2Page";
import LikePage from "./pages/LikePage";
import RealLikePage from "./pages/RealLikePage";
import Cocktail from "./pages/Cocktail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/stars" element={<EveryStarsPage />}/>
        <Route path="/stars/:starID/detail" element={<StarsDetailPage />}/>
        <Route path="/random" element={<RandomStarPage />}/>
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/copyright1" element={<CopyrightPage />} />
        <Route path="/copyright2" element={<CopyrightPage2 />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/reallike" element={<RealLikePage />} />
        <Route path="/cocktail" element={<Cocktail />} />
      </Routes>
    </BrowserRouter>
  );
}

// je vais recuperer id de tableau stars, pour remplir le parametre d'url 
// /:starID/ c'est parametre d'url, donc chaque stars[i].id va devenir un parametre

export default App;
