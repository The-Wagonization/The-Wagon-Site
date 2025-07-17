document.addEventListener('DOMContentLoaded', () => {
  const cssVarsScript = document.createElement('script');
  cssVarsScript.src = '../js/CSSVars.js';
  cssVarsScript.async = false;
  cssVarsScript.defer = true;
  cssVarsScript.onload = () => {
      console.log("css vars for u yippe");
      if (typeof initCSSVars === "function") {
          initCSSVars();
      } else {
          console.error("initCSSVars function got kidnapped lmao");
      }
  };
  cssVarsScript.onerror = () => {
      console.error("no css vars for u");
  };
  document.head.appendChild(cssVarsScript);
  const scripts = [
      '../js/diso.js',
      '../js/linkczech.js',
      '../js/panik.js',
      '../js/sanit.js',
      '../js/Song.js',
  ];
  scripts.forEach((src, index) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.defer = true;
      script.onload = () => {
          console.log(`${src} loaded successfully`);
          if (src.includes("Song.js") && typeof songInit === "function") {
              songInit();
          }
      };
      script.onerror = () => {
          console.error(`Failed to load ${src}`);
      };
      document.head.appendChild(script);
      console.log("we are loaded badababdabumbum");
  });
});