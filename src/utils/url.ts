function isValidHttpUrl(string: string): boolean {
  try {
    const url: URL = new URL(string);

    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

export const getHostFromUrl = (url: string): string => {
  const host = isValidHttpUrl(url) ? new URL(url).host : '';

  return host;
};
