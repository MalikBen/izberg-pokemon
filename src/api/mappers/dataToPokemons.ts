import { Pokemon } from '../../models/Pokemon';

interface IPokemonType {
  id: number;
  name: string;
}

interface IPokemonTypes {
  id: number;
  pokemon_v2_type: IPokemonType;
}

interface IPokemonData {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: IPokemonTypes[];
}

interface IData {
  pokemon_v2_pokemon: IPokemonData[];
}

const dataToPokemons  = (data: IData): Pokemon[] => {
  if (!data) {
    return [];
  }

  const { pokemon_v2_pokemon } = data;

  return pokemon_v2_pokemon.map((pokemonItem: IPokemonData) => {
    const { id, name, pokemon_v2_pokemontypes } = pokemonItem;
    const types = pokemon_v2_pokemontypes.map(({ pokemon_v2_type: { name } }) => name);
    return { id, name, types };
  });
};

export default dataToPokemons;
