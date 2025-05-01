import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { TypesDetailedCard } from "../components/TypesDetailedCard"
import typesServices from "../services/TypesServices"
import { useEffect } from "react"

export const TypesDetails = () => {

    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()

    useEffect(() => {
       typesServices.getOneType(id).then(data => dispatch({ type: 'types_details', payload: data }))

    }, [])

    return (
        <div className="bg-dark mt-4">

            <TypesDetailedCard />

        </div>
    )
}