export const setItem = (key, data) => {
  try {
    if (typeof data === 'object') {
      localStorage.setItem(key, JSON.stringify(data));
    }
    else {
      localStorage.setItem(key, data);
    }
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getItem = (key) => {
  return localStorage.getItem(key);
}

export const deleteItem = (key) => {
  localStorage.removeItem(key);
}