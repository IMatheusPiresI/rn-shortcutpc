export const verifyURL = (path: string) => {
  if (path.includes('http')) {
    return path;
  }

  return `data:image/png;base64,${path}`;
};
