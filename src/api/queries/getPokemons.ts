import gql from 'graphql-tag';

const GET_POKEMONS = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemon {
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
  }
`;

export default GET_POKEMONS;
