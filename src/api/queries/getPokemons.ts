import gql from 'graphql-tag';

const GET_POKEMONS = gql`
  query samplePokeAPIquery ($limit: Int, $offset: Int){
    pokemon_v2_pokemon (limit: $limit, offset: $offset){
      id
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          id
          name
        }
      }
      pokemon_v2_pokemonspecy {
        id
        pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 5}}) {
          id
          name
        }
      }
    }
    pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export default GET_POKEMONS;
