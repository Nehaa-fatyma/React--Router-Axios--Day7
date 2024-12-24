import { Routes,Route } from "react-router-dom";
import {Home} from '../Components/Home';
import {About} from '../Components/About';
import {Services} from '../Components/Services';
import {Contact} from '../Components/Contact';
import {BooksList} from '../Components/BooksList';


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/books' element={<BooksList/>} />

        </Routes>
    )
}