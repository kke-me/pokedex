import type { Config } from 'tailwindcss';

// object関数の型を修正
const object = (
  limit: number,
  base: number = 16
): { [key: string]: string } => {
  return {
    ...[...Array(limit + 1)].reduce((object, _, index) => {
      object[`${index}`] = `${index / base}rem`;
      return object;
    }, {}),
  };
};

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        pc: { raw: 'all and (max-width: 1365px)' },
        tb: { raw: 'only screen and (max-width: 1023px)' },
        sp: { raw: 'only screen and (max-width: 767px)' },
        print: { raw: 'print' },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: object(200),
      fontSize: object(80),
    },
  },
  plugins: [],
} satisfies Config;
