import { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const TypesDetailedCard = (props) => {
    const { store, dispatch } = useGlobalReducer()

    const [favBtn, setFavBtn] = useState(false)

    return (
        <div className="container">

            <div>
                <div className="d-flex">
                    <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" className="logo-css me-2" alt="logo" />
                    <h1 className="text-warning">Types</h1>
                </div>
                <div className="card border-warning border-4 rounded-0 detailedCard-css" >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <div>
                            <img src='https://static.wikia.nocookie.net/monster-master/images/7/7c/Types.png/revision/latest/thumbnail/width/360/height/450?cb=20170525104825' className="img-fluid mt-4 detailed-img-css" alt={store.typesDetails?.name} />
                        </div>
                        <div className="card-body w-75">

                            <h1 className="me-3 text-center">{store.typesDetails?.name}</h1>


                            {/* table for md and lg screens  */}
                            <div className="d-none d-lg-block d-md-block">

                                <table className="table mt-5 text-center border border-warning">
                                    <thead>
                                        <tr>
                                            <th className="bg-warning" scope="col">Moves</th>
                                            <th className="bg-warning" scope="col">Damage</th>
                                            <th className="bg-warning" scope="col">No Damage</th>
                                            <th className="bg-warning" scope="col">Pokemons</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-end border-warning"> {store.typesDetails?.moves.slice(0, 5).map((el, i) => <p key={i}> {el.name}</p>)}</td>
                                            <td className="border-end border-warning">
                                                <div >
                                                    <div>
                                                        <strong>From:</strong>
                                                        {store.typesDetails?.damage_relations.double_damage_from.length > 0 ? (
                                                            store.typesDetails.damage_relations.double_damage_from.map((el, i) => (
                                                                <p key={i}>{el.name}</p>
                                                            ))
                                                        ) : (
                                                            <p>No data</p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <strong>To:</strong>
                                                        {store.typesDetails?.damage_relations.double_damage_to.length > 0 ? (
                                                            store.typesDetails.damage_relations.double_damage_to.map((el, i) => (
                                                                <p key={i}>{el.name}</p>
                                                            ))
                                                        ) : (
                                                            <p>No data</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="border-end border-warning">
                                                <div >
                                                    <div>
                                                        <strong>From:</strong>
                                                        {store.typesDetails?.damage_relations.no_damage_from.map((el, i) =>
                                                            <p key={i}> {el.name}</p>)}
                                                    </div>
                                                    <div>
                                                        <strong>To:</strong>
                                                        {store.typesDetails?.damage_relations.no_damage_to.map((el, i) => (
                                                            <p key={i}>{el.name}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-end border-warning"> {store.typesDetails?.pokemon.slice(0, 5).map((el, i) => <p key={i}> {el.pokemon.name}</p>)}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* table for sm screens  */}
                            <div className="d-lg-none d-md-none">
                                <div className="card border-warning mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title bg-warning p-2">Moves</h5>
                                        {store.typesDetails?.moves.slice(0, 5).map((el, i) => <p className="ms-3" key={i}>{el.name}</p>)}
                                    </div>
                                </div>
                                <div className="card border-warning mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title bg-warning p-2">Damage</h5>
                                        <div className="ms-3"><strong>From:</strong> {store.typesDetails?.damage_relations.double_damage_from.length > 0 ? (
                                            store.typesDetails.damage_relations.double_damage_from.map((el, i) => <p className="ms-3" key={i}>{el.name}</p>)
                                        ) : (<p className="">No data</p>)}</div>
                                        <div className="ms-3"><strong>To:</strong> {store.typesDetails?.damage_relations.double_damage_to.length > 0 ? (
                                            store.typesDetails.damage_relations.double_damage_to.map((el, i) => <p className="ms-3" key={i}>{el.name}</p>)
                                        ) : (<p className="ms-3">No data</p>)}</div>
                                    </div>
                                </div>
                                <div className="card border-warning mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title bg-warning p-2">No Damage</h5>
                                        <div className="ms-3"><strong>From:</strong> {store.typesDetails?.damage_relations.no_damage_from.map((el, i) => <p className="ms-3" key={i}>{el.name}</p>)}</div>
                                        <div className="ms-3"><strong>To:</strong> {store.typesDetails?.damage_relations.no_damage_to.map((el, i) => <p className="ms-3" key={i}>{el.name}</p>)}</div>
                                    </div>
                                </div>
                                <div className="card border-warning mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title bg-warning p-2">Pokemons</h5>
                                        {store.typesDetails?.pokemon.slice(0, 5).map((el, i) => <p className="ms-3" key={i}>{el.pokemon.name}</p>)}
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