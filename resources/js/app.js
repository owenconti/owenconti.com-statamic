import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import Alpine from 'alpinejs';
import debounce from './debounce';

hljs.registerLanguage('javascript', javascript);
hljs.initHighlightingOnLoad();