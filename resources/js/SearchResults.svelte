<script>
	import { onMount } from 'svelte';

	let results = [];
	let query = '';

	onMount(async () => {
		query = new URLSearchParams(window.location.search).get('q');
      const host = `https://${window.algoliaAppId}-dsn.algolia.net`;
      const url = `${host}/1/indexes/default?query=${encodeURIComponent(query)}`;

      fetch(url, {
        headers: {
          'X-Algolia-Application-Id': window.algoliaAppId,
          'X-Algolia-API-Key': window.algoliaApiKey,
        }
      })
        .then((response) => response.json())
        .then((data) => {
          results = [];

          if (data.hits.length) {
            results = data.hits;
          }
        });
	});
</script>

<div>
  {#if query}
	  <h1 class="mb-8">&ldquo;{query}&rdquo;</h1>
  {/if}

  <div>
    {#if results.length > 0}
      {#each results as result}
        <article v-for="result in results" :key="result.id" class="pb-6 mb-6 border-b border-gray-300 last:border-0">
          <h2 class="m-0">
            <a href="{result.url}" class="heading text-dark">{ result.title }</a>
          </h2>
          <p class="m-0">{ result.excerpt }</p>
        </article>
      {/each}
    {:else}
      <p>There are no results for your query!</p>
    {/if}
  </div>
</div>
