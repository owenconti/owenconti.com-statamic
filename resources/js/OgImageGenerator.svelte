<div class="relative flex items-center justify-center px-4 text-center text-white og-image bg-brand-dark">
	<h1 class="heading highlight-heading">{title}</h1>
	<p class="absolute bottom-0 right-0 mb-4 mr-10 text-2xl heading">owenconti.com</p>
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
    height: 632px;
		width: 1200px;
	}
	.highlight-heading {
		font-size: 90px;
		max-width: 96%;
		transform: rotate(-1deg);
	}
	.highlight-heading::before {
		width: 100%;
	}
</style>