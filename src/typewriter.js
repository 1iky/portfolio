const lineElement = document.querySelector('.line');
const text = lineElement.textContent; // Get the text content
lineElement.style.setProperty('--text-width', `${lineElement.scrollWidth}px`);