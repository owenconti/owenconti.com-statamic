<button type="button" on:click="{onClick}" class="text-brand-primary hover:text-black dark:text-gray-200 dark:hover:text-white" title={buttonTitle}>
  {#if isDarkMode}
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
  {:else}
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
  {/if}
</button>

<script>
  import { onMount } from 'svelte';

  let isDarkMode = false;
  let buttonTitle = null;

  onMount(() => {
    determineDarkMode();
  });

	function onClick() {
    const $html = document.getElementsByTagName('html')[0];

    if (isDarkMode) {
      localStorage.darkModeEnabled = 'false';
      $html.classList.remove('dark');
    } else {
      localStorage.darkModeEnabled = 'true';
      $html.classList.add('dark');
    }

    determineDarkMode();
  }

  function determineDarkMode() {
    const hasPreference = !!localStorage.darkModeEnabled;
    const preferenceDarkMode = localStorage.darkModeEnabled === 'true';
    const osDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    isDarkMode = hasPreference ? preferenceDarkMode : osDarkMode;
    buttonTitle = `Click to ${isDarkMode ? 'disable' : 'enable'} dark mode`;
    
    const $html = document.getElementsByTagName('html')[0];
    if (isDarkMode) {
      $html.classList.add('dark');
    } else {
      $html.classList.remove('dark');
    }
  }
</script>