// PostCSS configuration — required by Tailwind CSS v4
// See: https://tailwindcss.com/docs/installation/framework-guides/nextjs
const config = {
  plugins: {
    // @tailwindcss/postcss: the PostCSS plugin for Tailwind v4
    // Note: in Tailwind v3 this was just 'tailwindcss'; v4 ships it as a separate package
    '@tailwindcss/postcss': {},
  },
};

export default config;
