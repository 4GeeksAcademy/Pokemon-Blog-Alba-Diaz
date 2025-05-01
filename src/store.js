export const initialStore = () => {
  return {

    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'update_favorite_list':
      return {
        ...store,
        favorites: action.payload,
      };
    case 'remove_favorites':
      return {
        ...store,
        favorites: action.payload
      }

    case 'add_favorites':
      return {
        ...store,
        favorites: action.payload
      }

    case 'types_details':
      return {
        ...store,
        typesDetails: action.payload
      }
    case 'types_data':
      return {
        ...store,
        types: action.payload
      }
    case 'location_details':
      return {
        ...store,
        detailsLocation: action.payload
      }
    case 'location_data':
      return {
        ...store,
        locations: action.payload
      }
    case 'pokemon_details':
      return {
        ...store,
        pokemonsDetails: action.payload
      }
    case 'pokemon_data':
      return {
        ...store,
        pokemons: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
