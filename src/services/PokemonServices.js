const pokemonServices = {}

pokemonServices.getAllPokemons = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/')
        if (!resp.ok) throw new Error('Error fetching all pokemons')
        const data = await resp.json()
        return data

    } catch (error) {
        console.log(error);

    }

}

pokemonServices.getOnePokemon = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        if (!resp.ok) throw new Error('Error fetching one pokemon')
        const data = await resp.json()
        return data

    } catch (error) {
        console.log(error);

    }

}

export default pokemonServices

