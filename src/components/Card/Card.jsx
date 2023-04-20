import { Link } from "react-router-dom";
import style from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux'
import { useState, useEffect } from "react";

 function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.Card}>
         
       <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
         <img src={image} alt={name}/>
         <h2>{name}</h2>
         </Link>
         <p>Status: {status}</p>
         <p>Species: {species}</p>
         <p>Gender: {gender}</p>
         <p>Origin: {origin}</p>
         <Link to={`/detail/${id}`}>See details</Link>
         
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = ( dispatch ) => {
   return {
      addFav: (character) => { dispatch(addFav(character))},
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)