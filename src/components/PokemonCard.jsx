
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";


export const PokemonCard = ({ name, url }) => {
  let aux = url.split('/');
  const id = aux[6]


  const { store, dispatch } = useGlobalReducer()

  const isFavorite = store.favorites.includes(name);


  const handleClick = () => {


    let updatedFavorites;

    if (isFavorite) {

      updatedFavorites = store.favorites.filter(favName => favName !== name);
      dispatch({
        type: 'remove_favorites',
        payload: updatedFavorites
      });
    } else {

      updatedFavorites = [...store.favorites, name];
      dispatch({
        type: 'add_favorites',
        payload: updatedFavorites
      });
    }

    console.log(`${name} ${isFavorite ? 'no favorito' : 'favorito'}`);

  };

  return (
    <div className="container-fluid">

      <div className="col">
        <div className="card border-warning border-4 rounded-0 card-css">
          <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"} className="card-img-top rounded-0 card-img-css" alt={name} />
          <div className="card-body card-body-css">
            <h5 className="card-title text-center mb-4 ">{name}</h5>
            <div className="d-flex justify-content-between">
              <Link className="btn btn-warning" to={'/pokemon_details/' + id}>Learn more!</Link>

              <button type="button" className="btn border-warning favorite-btn" onClick={handleClick}>
                {isFavorite ? (<i className="fa-solid fa-heart heart-css" ></i>) : (<i className="fa-regular fa-heart text-warning"></i>)}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

  )

}