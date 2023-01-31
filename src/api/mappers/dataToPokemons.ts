import { Pokemon } from '../../models/Pokemon';

interface IPokemonType {
  id: number;
  name: string;
}

interface IPokemonSpeciesName {
  name: string;
}

interface IPokemonSpecy {
  id: number;
  pokemon_v2_pokemonspeciesnames: IPokemonSpeciesName[]
}

interface IPokemonTypes {
  id: number;
  pokemon_v2_type: IPokemonType;
}

interface IPokemonData {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: IPokemonTypes[];
  pokemon_v2_pokemonspecy: IPokemonSpecy;
}

interface IData {
  pokemon_v2_pokemon: IPokemonData[];
}

const dataToPokemons  = (data: IData): Pokemon[] => {
  if (!data) {
    return [];
  }

  const { pokemon_v2_pokemon } = data;

  let typesArray: Array<string> = [];
  const result = pokemon_v2_pokemon.map((pokemonItem: IPokemonData) => {
    const { id, pokemon_v2_pokemontypes, pokemon_v2_pokemonspecy: { pokemon_v2_pokemonspeciesnames } } = pokemonItem;
    const pokemonName = pokemon_v2_pokemonspeciesnames[0].name;
    const types = pokemon_v2_pokemontypes.map(({ pokemon_v2_type: { name } }) => {
      return name;
    });
    typesArray = [...typesArray, pokemon_v2_pokemontypes[0].pokemon_v2_type.name];
    return { id, name: pokemonName, types };
  });
  return result;
};

export default dataToPokemons;
