const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('resources/images', 'public/images')
  .copy('resources/fonts', 'public/fonts')
  .js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('postcss-nested')
  ])
  .options({
    processCssUrls: false
  })
  .version();

if (mix.inProduction()) {
  mix.purgeCss();
}