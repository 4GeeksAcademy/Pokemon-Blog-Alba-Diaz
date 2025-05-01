
import useGlobalReducer from "../hooks/useGlobalReducer"


export const PokemonDetailedCard = (props) => {
    const { store, dispatch } = useGlobalReducer()


    return (
        <div className="container">
            <div>
                <div className="d-flex">
                    <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" className="logo-css me-2" alt="logo" />
                    <h1 className="text-warning">Pokemons</h1>
                </div>
                <div className="card border-warning border-4 rounded-0 detailedCard-css" >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <div>
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + store.pokemonsDetails?.id + ".png"} className="img-fluid detailed-img-css " alt={store.details?.name} />
                        </div>
                        <div className="card-body w-75">
                            <h1 className="text-center me-3">{store.pokemonsDetails?.name}</h1>

                            {/* table for md and lg screens  */}
                            <div className="d-none d-lg-block d-md-block">
                                <table className="table text-center border border-warning mt-5">
                                    <thead>
                                        <tr>
                                            <th className="bg-warning" scope="col">Type</th>
                                            <th className="bg-warning" scope="col">Abilities</th>
                                            <th className="bg-warning" scope="col">Height</th>
                                            <th className="bg-warning" scope="col">Weight</th>
                                            <th className="bg-warning" scope="col">Moves</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-end border-warning"> {store.pokemonsDetails?.types.map((el, i) => <p key={i}> {el.type.name}</p>)}</td>
                                            <td className="border-end border-warning"> {store.pokemonsDetails?.abilities.map((el, i) => <p key={i}> {el.ability.name}</p>)}</td>
                                            <td className="border-end border-warning"> {store.pokemonsDetails?.height}</td>
                                            <td className="border-end border-warning"> {store.pokemonsDetails?.weight}</td>
                                            <td className="border-end border-warning"> {store.pokemonsDetails?.moves.slice(0, 2).map((el, i) => <p key={i}> {el.move.name}</p>)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* table for sm screens  */}
                            <div className="d-lg-none d-md-none">
                                <div>
                                    <div className="card border-warning mb-3 mt-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Type</h5>
                                            {store.pokemonsDetails?.types.map((el, i) => <p className="ms-3" key={i}>{el.type.name}</p>)}
                                        </div>
                                    </div>
                                    <div className="card border-warning mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Abilities</h5>
                                            {store.pokemonsDetails?.abilities.map((el, i) => <p className="ms-3" key={i}>{el.ability.name}</p>)}
                                        </div>
                                    </div>
                                    <div className="card border-warning mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Height</h5>
                                            <p className="ms-3">{store.pokemonsDetails?.height}</p>
                                        </div>
                                    </div>
                                    <div className="card border-warning mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Weight</h5>
                                            <p className="ms-3">{store.pokemonsDetails?.weight}</p>
                                        </div>
                                    </div>
                                    <div className="card border-warning mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Moves</h5>
                                            {store.pokemonsDetails?.moves.slice(0, 2).map((el, i) => <p className="ms-3" key={i}>{el.move.name}</p>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}