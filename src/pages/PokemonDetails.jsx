import { useParams } from "react-router-dom"
import { PokemonDetailedCard } from "../components/PokemonDetailedCard"
import { useEffect } from "react"
import pokemonServices from "../services/PokemonServices"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const PokemonDetails = () => {

    const { store, dispatch } = useGlobalReducer()
      const { id } = useParams()

    useEffect(() => {
        pokemonServices.getOnePokemon(id).then(data => dispatch({ type: 'pokemon_details', payload: data }))

    }, [])

    return (
        <div className="bg-dark mt-4">
            <PokemonDetailedCard />

        </div>
    )
}