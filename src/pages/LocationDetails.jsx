import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { LocationDetailedCard } from "../components/LocationDetailedCard"
import { useEffect } from "react"
import locationServices from "../services/LocationServices"

export const LocationDetails = () => {

    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()

    useEffect(() => {
        locationServices.getOneLocation(id).then(data => dispatch({ type: 'location_details', payload: data }))
 }, [])

    return (
        <div className="bg-dark mt-4">

            <LocationDetailedCard/>

        </div>
    )
}