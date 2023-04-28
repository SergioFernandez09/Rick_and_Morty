let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character)

    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    console.log('ID a eliminar:', id);

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

    console.log('Lista de favoritos actualizada:', myFavorites);

    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}; 