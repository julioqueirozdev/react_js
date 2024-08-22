import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import PageNotFound from "./pages/PageNotFound";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import FavoritesProvider from "./contexts/Favorites";


function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          {/* essa rota tem um parâmetro pois usa : + um nome em seguida */}
          <Route path="*" element={<PageNotFound />}></Route>
          {/* o * é o seletor global. qualquer acesso a paginas que não sejam / ou /watch receberá a page not found */}
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
