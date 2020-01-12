const config = require('@ohseesoftware/tailwind-config');

module.exports = {
 ...config,
 theme: {
  ...config.theme,
  fontFamily: {
   sans: [
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
   ]
  }
 },
 plugins: [require('@tailwindcss/custom-forms')]
};
