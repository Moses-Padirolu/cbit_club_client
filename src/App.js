import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Clubs from './Components/Clubs'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; 
import Robovanza from './Components/Robovanza';
import Spandana from './Components/Spandana';
import AOS from 'aos';
import UpdateEvent from './Components/UpdateEvent';
import RobovanzaAdmin from './Components/RobovanzaAdmin';
import SpandanaAdmin from './Components/SpandanaAdmin';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/clubs' element={<Clubs/>}>
            <Route path='spandana' element={<Spandana/>}/>
            <Route path='/clubs/' element={<Robovanza/>}/>
          </Route>
          <Route  path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/robovanzaadmin' element={<RobovanzaAdmin/>}></Route>
          <Route path='spandanaadmin' element={<SpandanaAdmin/>}></Route>
          <Route path='/update/:id' element={<UpdateEvent/>}></Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
