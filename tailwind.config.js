const config = require('@ohseesoftware/tailwind-config');

module.exports = {
 ...config,
 theme: {
  ...config.theme,
  colors: {
    ...config.theme.colors,
    primary: '#273240',
    secondary: 'var(--osm-secondary)',
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
 plugins: [require('@tailwindcss/custom-forms')]
};
