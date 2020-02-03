export const getImageUrl = (url: string) => {
  return process.env.REACT_APP_IMAGE_PREFIX + url;
};
