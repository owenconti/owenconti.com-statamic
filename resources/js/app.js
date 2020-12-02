import Alpine from 'alpinejs';

import SearchResults from './SearchResults.svelte';
new SearchResults({
  target: document.getElementById('search-results')
});

import OgImageGenerator from './OgImageGenerator.svelte';
new OgImageGenerator({
  target: document.getElementById('og-image-generator')
});

import NewsletterForm from './NewsletterForm.svelte';
const newsletterElements = document.getElementsByClassName('newsletter-form');
for (const $el of newsletterElements) {
  new NewsletterForm({
    target: $el
  });
}