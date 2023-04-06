import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '316a61828bed.209f3a18b9b4930df3d3'

function App() {
   const [characters, setCharacters] = useState([])
   const location = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'sergiofernandezn2001@gmail.com';
   const PASSWORD = 'Checho0525';
 
   function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
     }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

function onSearch(id) {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              window.alert('¡No hay personajes con ese ID!');
           }
        });
}
const onClose = (id) => {
   const charactersFiltered = characters.filter(characters => 
      characters.id !== Number(id))
      setCharacters (charactersFiltered)
}

return (
   
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" 
            element={access ? (<Cards characters={characters} onClose={onClose}/>
             ) : (<navigate to="/login" />)} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   
);
}

export default App;
