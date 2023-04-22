import Card from "../Card/Card"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"

const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
    const [aux, serAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        serAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value='allCharacters'>All Characters</option>
            </select>
        {
            myFavorites?.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose={fav.onClose}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);