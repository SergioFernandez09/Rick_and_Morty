import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions.types'


const initialState = {
    myFavorites: [],
    allCharacterFav: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        
        case ADD_FAV: 
        return{
            ...state,
            myFavorites: [...state.allCharacterFav, payload],
            allCharacterFav: [...state.allCharacterFav, payload]
        }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:
            const allCharacterFavFiltered= state.allCharacterFav.filter(character => character.genger === payload)
            return{
                    ...state,
                    myFavorites: 
                        payload === 'allCharacters'
                        ? [...state.allCharacterFav]
                        :allCharacterFavFiltered
            }

        case ORDER:
            const allCharacterFavCopy = [...state.allCharacterFav]
            return {
                ...state,
                myFavorites: 
                    payload === 'A'
                    ? allCharacterFavCopy.sort((a, b) => a.id - b.id)
                    : allCharacterFavCopy.sort((a, b) => b.id - a.id)
            }
        
        default:
            return {...state}
    }
}

export default reducer;