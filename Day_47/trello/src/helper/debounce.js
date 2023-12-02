export const debounce = (callback, timerId) => {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    callback();
    timerId = null;
  }, 500);
};
