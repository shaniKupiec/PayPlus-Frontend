export const storageService = {
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
};

const LOGGED_IN_USER_ID_KEY = 'loggedInUser'

function saveToStorage(val, key = LOGGED_IN_USER_ID_KEY) {
  const str = JSON.stringify(val);
  localStorage.setItem(key, str);
}

function loadFromStorage(key = LOGGED_IN_USER_ID_KEY) {
  const str = localStorage.getItem(key);
  return JSON.parse(str);
}

function removeFromStorage(key = LOGGED_IN_USER_ID_KEY) {
  localStorage.remove(key);
}
