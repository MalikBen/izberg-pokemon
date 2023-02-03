import { Inter, Luckiest_Guy } from '@next/font/google';

export const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
});

export const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'fallback',
});
