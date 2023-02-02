import React, { useState } from 'react';
import { Luckiest_Guy } from '@next/font/google';
import Image from 'next/image';

import { IPokemon } from 'types/Pokemon';

import styles from './PokemonCard.module.css';
import FavouriteButton from 'components/FavouriteButton/FavouriteButton';

interface IPokemonCard {
  pokemon: IPokemon,
  isFavourite: boolean,
  toggleFavourite: () => void
}

const luckiest_Guy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin']
});

const PokemonCard = ({ pokemon, isFavourite, toggleFavourite }: IPokemonCard) => {
  const { id, name, types } = pokemon;

  const firstType = types[0];
  const cardStyle = styles[firstType] || styles.normal;
  const artImage = `/images/pokemons/official-artwork/${id}.png`;
  const shinyImage = `/images/pokemons/official-artwork/shiny/${id}.png`;
  // const artImage = `/images/pokemons/dream-world/${id}.svg`;
  // const shinyImage = `/images/pokemons/dream-world/${id}.svg`;

  return (
    <div key={id} className={`flex relative justify-center w-full ${styles.card}`}>
      <div className={`absolute -top-3 -right-3 z-20 ${styles.favourite}`}>
        <FavouriteButton isActive={isFavourite} onClick={toggleFavourite} />
      </div>
      <div className={`relative flex w-full p-6 ${styles.wrapper} ${cardStyle}`}>
        <div className={styles.cardOverlay} />
        <div className={styles.blur} />
        <div className={`absolute inset-6 art ${styles.artContainer}`}>
          <Image className={styles.artImage} src={artImage} alt={name} fill style={{objectFit: 'contain'}} />
        </div>
      </div>
      <div className={`absolute inset-6 art ${styles.shinyContainer}`}>
        <Image src={shinyImage} alt={name} fill style={{ objectFit: 'contain' }} />
      </div>
      <div className={`absolute bottom-8 text-center ${styles.titleContainer}`}>
        <div className={`text-3xl leading-6 tracking-wider uppercase text-yellow-200 ${luckiest_Guy.className}`}>{name}</div>
        <div className="uppercase text-sm text-white">{types.join(' | ')}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
