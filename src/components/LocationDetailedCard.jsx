import useGlobalReducer from "../hooks/useGlobalReducer"


export const LocationDetailedCard = () => {

    const { store, dispatch } = useGlobalReducer()


    return (
        <div className="container">
            <div className="d-flex">
                <img src="https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png" className="logo-css me-2" alt="logo" />
                <h1 className="text-warning">Locations</h1>
            </div>

            <div>
                <div className="card border-warning border-4 rounded-0 detailedCard-css" >
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iwQ570pjjpihc6z2AKUV66fdNFfDLWZK996nCISNcxLcOogAKQKxnqqjzjBSEjujbMc&usqp=CAU' className="img-fluid detailed-img-css" alt={store.detailsLocation?.name} />
                        </div>
                        <div className="card-body w-75">

                            <h1 className="me-3 text-center">{store.detailsLocation?.name}</h1>


                            {/* table for md and lg screens  */}
                            <div className="d-none d-lg-block d-md-block">
                                <table className="table text-center border border-warning mt-5">
                                    <thead>
                                        <tr>
                                            <th className="bg-warning" scope="col">Area</th>
                                            <th className="bg-warning" scope="col">Region</th>
                                            <th className="bg-warning" scope="col">Language</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-end border-warning"> {store.detailsLocation?.areas.map((el, i) => <p key={i}> {el.name}</p>)}</td>
                                            <td className="border-end border-warning"> {store.detailsLocation?.region.name}</td>
                                            <td className="border-end border-warning"> {store.detailsLocation?.names.slice(0, 1).map((el, i) => <p key={i}> {el.name}</p>)}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* table for sm screens  */}

                            <div className="d-lg-none d-md-none">

                                <div>
                                    <div className="card border-warning mb-3 mt-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Area</h5>
                                            {store.detailsLocation?.areas.map((el, i) => <p className="ms-3" key={i}>{el.name}</p>)}
                                        </div>
                                    </div>
                                    <div className="card border-warning mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Region</h5>
                                            <p className="ms-3">{store.detailsLocation?.region.name}</p>
                                        </div>
                                    </div>
                                    <div className="card border-warning mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title bg-warning p-2">Language</h5>
                                            <p className="border-end border-warning"> {store.detailsLocation?.names.slice(0, 1).map((el, i) => <p className="ms-3" key={i}> {el.name}</p>)}</p>
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