import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';

import Alpine from 'alpinejs';
import debounce from './debounce';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.initHighlightingOnLoad();