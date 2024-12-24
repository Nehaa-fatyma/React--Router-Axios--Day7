import {Header} from './Components/Header';
import { AppRoutes } from './Routes/AppRoutes';
import {BooksList} from './Components/BooksList';

function App() {
  return (
   <>
   <Header/>
   <AppRoutes/>
   <BooksList/>
   </> 
  )
}

export default App;
