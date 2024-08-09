import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Watch from './pages/Watch';
import PageNotFound from './pages/PageNotFound';

function AppRoutes(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/watch' element={<Watch/>}></Route>
                <Route path='*' element={<PageNotFound/>}></Route>
                {/* o * é o seletor global. qualquer acesso a paginas que não sejam / ou /watch receberá a page not found */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;