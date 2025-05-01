const typesServices = {}

typesServices.getAllTypes = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/type/')
        if (!resp.ok) throw new Error('Error fetching all types')
        const data = await resp.json()
        return data

    } catch (error) {
        console.log(error);

    }

}

typesServices.getOneType = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/type/' + id);
        if (!resp.ok) throw new Error('Error fetching one type')
        const data = await resp.json()
        return data

    } catch (error) {
        console.log(error);

    }

}

export default typesServices

