const config = require('@ohseesoftware/tailwind-config');

module.exports = {
 ...config,
 purge: {
   enabled: true,
   content: ['resources/**/*', 'content/collections/**/*']
 },
 variants: {
  extend: {
    borderWidth: ['last'],
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
