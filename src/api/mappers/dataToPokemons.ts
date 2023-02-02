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

interface IPokemonCount {
  aggregate: {
    count: number
  };
}

interface IPokemonData {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: IPokemonTypes[];
  pokemon_v2_pokemonspecy: IPokemonSpecy;
}

interface IData {
  pokemon_v2_pokemon: IPokemonData[];
  pokemon_v2_pokemon_aggregate: IPokemonCount;
}

interface IDataToPokemons {
  data: Pokemon[],
  total: number
}

const dataToPokemons  = (data: IData): IDataToPokemons => {
  if (!data) {
    return { data: [], total: 0 };
  }

  const { pokemon_v2_pokemon, pokemon_v2_pokemon_aggregate: { aggregate: { count } }} = data;

  let typesArray: Array<string> = [];
  const result = pokemon_v2_pokemon.map((pokemonItem: IPokemonData) => {
    const {
      id,
      pokemon_v2_pokemontypes,
      pokemon_v2_pokemonspecy: { pokemon_v2_pokemonspeciesnames },
    } = pokemonItem;
    const pokemonName = pokemon_v2_pokemonspeciesnames[0].name;
    const types = pokemon_v2_pokemontypes.map(({ pokemon_v2_type: { name } }) => {
      return name;
    });
    typesArray = [...typesArray, pokemon_v2_pokemontypes[0].pokemon_v2_type.name];
    return { id, name: pokemonName, types };
  });
  return { data: result, total: count};
};

export default dataToPokemons;
