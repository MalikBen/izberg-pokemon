import React from 'react';

import styles from 'components/PokemonCard/PokemonCard.module.css';
import Spinner from 'components/Spinner/Spinner';

const PokemonCardsSkeleton = () => (
    <div className={`flex relative justify-center items-center w-full animate-pulse ${styles.card} ${styles.skeleton}`}>
      <Spinner className="relative z-10" />
      <div className={styles.blur} />
    </div>
);

export default PokemonCardsSkeleton;
