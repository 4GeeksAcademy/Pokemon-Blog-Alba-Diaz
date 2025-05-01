import { LocationCard } from "../components/LocationCard.jsx";
import { PokemonCard } from "../components/PokemonCard.jsx";
import { TypesCard } from "../components/TypesCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<>
			<div className="bg-dark">

				<div className="ms-5">
					<div className="d-flex cardSectionTitle ">
						<img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" className="logo-css me-2" alt="logo" />
						<h1 className="text-warning">Pokemons</h1>
					</div>
					<div className="scroll-css">
						{store.pokemons?.results?.map((el, i) => <PokemonCard key={i} name={el.name} url={el.url} />)}

					</div>
					<div className="d-flex cardSectionTitle mt-4">
						<img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" className="logo-css me-2" alt="logo" />
						<h1 className="text-warning">Types</h1>

					</div>
					<div className="scroll-css">
						{store.types?.results?.map((el, i) => <TypesCard key={i} name={el.name} url={el.url} />)}

					</div>
					<div className="d-flex cardSectionTitle mt-4">
						<img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" className="logo-css me-2" alt="logo" />
						<h1 className="text-warning">Locations</h1>
					</div>
					<div className="scroll-css">
						{store.locations?.results?.map((el, i) => <LocationCard key={i} name={el.name} url={el.url} />)}

					</div>

				</div>
			</div>

		</>
	);
}; 