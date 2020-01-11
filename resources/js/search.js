import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
import 'instantsearch.css/themes/reset.css';

const searchClient = algoliasearch(window.algoliaAppId, window.algoliaApiKey);

export default function () {
  const search = instantsearch({
    searchClient,
    indexName: 'default',
    searchFunction(helper) {
      const container = document.querySelector('#hits');
      container.style.display = helper.state.query === '' ? 'none' : '';

      if (helper.state.query) {
        helper.search();
      }
    }
  });
  
  search.addWidgets([
    searchBox({
      container: '#search-box',
      placeholder: 'Search...',
    }),
    hits({
      container: '#hits',
      templates: {
        empty: '<p class="p-2 m-0">No results</p>',
        item: `<a href="{{ url }}" class="block px-2 py-3 bg-white text-sm text-left border-b border-gray-300 hover:bg-gray-200 hover:no-underline">
          {{ title }}
        </a>`
      }
    })
  ]);
  
  search.start();
}
