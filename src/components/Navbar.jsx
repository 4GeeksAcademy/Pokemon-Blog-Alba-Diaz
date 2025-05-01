import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

	const handleDeleteFav = (index) => {


		const updatedFavoriteList = store.favorites.filter((_, i) => i !== index);

		dispatch({
			type: 'update_favorite_list',
			payload: updatedFavoriteList,
		});

	};

	const empty = store.favorites?.length === 0;

	return (
		<nav className="navbar bg-black">
			<div className="container-fluid">
				<Link className="navbar-brand" to={'/'}>
					<img src="https://static.vecteezy.com/system/resources/previews/027/127/571/non_2x/pokemon-logo-pokemon-icon-transparent-free-png.png" alt="Logo" width="100" height="44" className="d-inline-block align-text-top ms-4" />
				</Link>
				<div className="btn-group dropup-center">
					<button type="button" className="btn border-warning dropdown-toggle text-warning" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge text-bg-warning">{store.favorites?.length}</span>
					</button>

					<ul className="dropdown-menu bg-black dropdown-menu-end border-warning  dropdown-menu-dark mt-3">
						{empty ? (<li><div className="dropdown-item d-flex justify-content-between text-warning me-3">Empty</div></li>) : (store.favorites?.map((favorites, i) => (
							<li key={i}>
								<div className="dropdown-item d-flex justify-content-between text-warning me-3"> {favorites} <i onClick={(e) => { e.stopPropagation(); handleDeleteFav(i) }} className="fa-solid fa-trash-can text-warning mt-1" ></i>
								</div>

							</li>)))}

					</ul>
				</div>
			</div>
		</nav>

	);
};