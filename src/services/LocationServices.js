const locationServices = {}

locationServices.getAllLocations = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/location/')
        if (!resp.ok) throw new Error('Error fetching all location')
        const data = await resp.json()
        return data

    } catch (error) {
        console.log(error);

    }

}
locationServices.getOneLocation = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/location/' + id)
        if (!resp.ok) throw new Error('Error fetching one location')
        const data = await resp.json()
        return data

    } catch (error) {
        console.log(error);

    }

}


export default locationServices

