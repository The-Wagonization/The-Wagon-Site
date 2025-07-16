import DOMPurify from 'https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js';
function autoSanitizeInputs() {
  const inputs = document.querySelectorAll('input[type="text"], textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = DOMPurify.sanitize(input.value);
    });
  });
}
window.addEventListener('DOMContentLoaded', autoSanitizeInputs);