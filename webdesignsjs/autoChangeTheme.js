const data = localStorage.getItem("changeTheme");
const addClass = (element, classList) => element.classList.add(...classList);
const removeClass = (element, classList) => element.classList.remove(...classList);
const html = document.querySelector('html')
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector('html');
  html.innerHTML = data;
});

(async () => {
    
    
    const iframe = await new Promise((resolve) => {
      const rmThemeLoSto = localStorage.removeItem('changeTheme')
      const iframe = document.querySelector('iframe');
      if (iframe) {
        resolve(rmThemeLoSto);
      } else {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            const nodes = Array.from(mutation.addedNodes);
            for (const node of nodes) {
              if (node.nodeName === 'IFRAME') {
                observer.disconnect();
                resolve(node);
                return;
              }
            }
          });
        });
        observer.observe(document.documentElement, { childList: true, subtree: true });
      }
    });

    iframe.addEventListener('load', () => {
      console.log('Iframe telah ter-load sepenuhnya');
    });

  })();