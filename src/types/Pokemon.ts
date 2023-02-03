export interface IPokemon {
  id: number;
  name: string;
  types: string[];
}

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

export interface IPokemonData {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: IPokemonTypes[];
  pokemon_v2_pokemonspecy: IPokemonSpecy;
}

export interface IData {
  pokemon_v2_pokemon: IPokemonData[];
  pokemon_v2_pokemon_aggregate: IPokemonCount;
}

export interface IDataToPokemons {
  data: IPokemon[],
  total: number
}
