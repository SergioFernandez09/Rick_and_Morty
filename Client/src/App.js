import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = '316a61828bed.209f3a18b9b4930df3d3'
// const EMAIL = 'sergiofernandezn2001@gmail.com';
// const PASSWORD = 'Checho0525';
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const [characters, setCharacters] = useState([])
   const location = useLocation();
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
 
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message); 
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


const onSearch = async (id) => {
   try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
              if (data.name) {
                 setCharacters((oldChars) => [...oldChars, data]);
              } 
         
      } catch (error) {
      alert('¡No hay personajes con ese ID!');
      
   }
}
const onClose = (id) => {
   const charactersFiltered = characters.filter(character => 
      character.id !== Number(id));
      setCharacters (charactersFiltered)
};

return (
   
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess}/>}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" 
            element={access ? (<Cards characters={characters} onClose={onClose}/>
             ) : (<Nav to="/login" />)} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/error" element={<Error />} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
      </div>
   
);
}

export default App;
