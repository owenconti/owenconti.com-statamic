import Alpine from 'alpinejs';
import SearchResults from './SearchResults.svelte';

const app = new SearchResults({
  target: document.getElementById('search-results')
});