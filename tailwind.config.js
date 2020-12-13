const config = require('@ohseesoftware/tailwind-config');

module.exports = {
 ...config,
 darkMode: 'media',
 purge: {
   content: ['resources/**/*', 'content/collections/**/*']
 },
 plugins: [
  require('@tailwindcss/typography'),
 ],
 variants: {
  extend: {
    borderWidth: ['last'],
    typography: ['dark']
  }
},
 theme: {
  ...config.theme,
  colors: {
    ...config.theme.colors,
    accent: 'var(--osm-accent)',
  },
  fontFamily: {
   sans: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
   ],
   heading: [
    'Bangers',
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
   ]
  }
 },
};
