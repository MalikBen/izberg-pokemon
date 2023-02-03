import React, { useState } from 'react';
import Image from 'next/image';

import { fallbackSrc } from 'utils/constants';

interface IImageWithFallback {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithFallback = ({ src, alt, className }: IImageWithFallback) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt={alt}
      src={imgSrc}
      className={className}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      style={{ objectFit: 'contain' }}
      fill
    />
  );
};

export default ImageWithFallback;