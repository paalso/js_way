export const normalizeUrl = (url) => {
  if (!checkUrl(url)) {
    return `https://${url}`;
  }
  return url;
};

const checkUrl = (url) =>
  url.startsWith("http://") || url.startsWith("https://");
