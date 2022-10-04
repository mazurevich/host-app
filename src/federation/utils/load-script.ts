const urlCache = new Set();

export const loadScript = (url: string) => {
  if (!url) {
    return Promise.reject("Url was not provided");
  }
  if (urlCache.has(url)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      resolve(null);
    };

    element.onerror = () => {
      reject(`Failed loading ${url}`);
    };

    document.head.appendChild(element);
  });
};
