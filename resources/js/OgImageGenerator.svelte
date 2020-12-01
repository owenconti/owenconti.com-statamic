<div class="og-image bg-dark text-white text-center relative flex items-center justify-center px-4">
	<h1 class="heading highlight-heading">{title}</h1>
	<p class="absolute right-0 bottom-0 mr-4 mb-4 heading text-xl">owenconti.com</p>
</div>

<script>
	import { onMount } from 'svelte';

	let title = '';

	onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    title = atob(params.get('title'));
	});
</script>

<style>
  .og-image {
    height: 617px;
		width: 1200px;
	}
	h1 {
		font-size: 90px;
		max-width: 96%;
	}
</style>