import React from 'react';

import { IPokemon } from 'types/Pokemon';
import FavouriteButton from 'components/FavouriteButton/FavouriteButton';
import ImageWithFallback from 'components/ImageFallback/ImageFallback';
import { artUrl, shinyUrl } from 'utils/constants';
import { luckiestGuy } from 'utils/fonts';

import styles from './PokemonCard.module.css';
import colorStyles from './PokemonCardColors.module.css';

interface IPokemonCard {
  pokemon: IPokemon,
  isFavourite: boolean,
  toggleFavourite: () => void
}

const PokemonCard = ({ pokemon, isFavourite, toggleFavourite }: IPokemonCard) => {
  const { id, name, types } = pokemon;

  const firstType = types[0];
  const cardStyle = colorStyles[firstType] || colorStyles.normal;
  const artImage = artUrl.replace('%s', `${id}`);
  const shinyImage = shinyUrl.replace('%s', `${id}`);

  return (
    <div key={id} className={`flex relative justify-center w-full ${styles.card}`}>
      <div className={`absolute -top-3 -right-3 z-20 ${styles.favourite}`}>
        <FavouriteButton isActive={isFavourite} onClick={toggleFavourite} />
      </div>
      <div className={`relative flex w-full p-6 ${styles.wrapper} ${cardStyle}`}>
        <div className={styles.cardOverlay} />
        <div className={colorStyles.blur} />
        <div className={`absolute inset-6 art ${styles.artContainer}`}>
          <ImageWithFallback
            alt={name}
            className={styles.artImage}
            src={artImage}
          />
        </div>
      </div>
      <div className={`absolute inset-6 art ${styles.shinyContainer}`}>
        <ImageWithFallback src={shinyImage} alt={name} />
      </div>
      <div className={`absolute bottom-8  text-center transition-all duration-500 ${styles.titleContainer}`}>
        <div className={`text-2xl md:text-3xl md:leading-6 leading-3 tracking-wider uppercase text-yellow-200 ${luckiestGuy.className}`}>{name}</div>
        <div className="uppercase text-xs md:text-sm text-white">{types.join(' | ')}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
