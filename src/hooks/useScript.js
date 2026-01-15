import { useState, useEffect } from "react";

const useScript = (src) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => setLoaded(true);
      script.onerror = () => setLoaded(false);
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, [src]);

  return loaded;
};

export default useScript;