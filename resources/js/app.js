import Alpine from 'alpinejs';
import NewsletterForm from './NewsletterForm.svelte';
import DarkModeButton from './DarkModeButton.svelte';

const newsletterElements = document.getElementsByClassName('newsletter-form');
for (const $el of newsletterElements) {
  new NewsletterForm({
    target: $el
  });
}

const $darkModeEl = document.getElementById('dark-mode-button');
new DarkModeButton({
  target: $darkModeEl
});
