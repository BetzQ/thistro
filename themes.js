const generalTheme = localStorage.getItem('theme')
let varGlobalToCopyHtmlCode;

const showCodeTheme = async (mode) => {
  const highlightCSS = document.querySelector('#highlightCss');
  const cssUrl = mode === 'dark' ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/dark.min.css' : mode === 'light' ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css':'auto';
  highlightCSS.href = cssUrl != 'auto' ? cssUrl : document.documentElement.getAttribute('data-bs-theme', 'dark') ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/dark.min.css':'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css';
};

const copyCode = async (_) => {
  await navigator.clipboard.writeText(varGlobalToCopyHtmlCode);
  document.querySelector('#copyTheHtml').innerText = `copied`
}

showCodeTheme()