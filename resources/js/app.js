import Alpine from 'alpinejs';

import NewsletterForm from './NewsletterForm.svelte';
const newsletterElements = document.getElementsByClassName('newsletter-form');
for (const $el of newsletterElements) {
  new NewsletterForm({
    target: $el
  });
}