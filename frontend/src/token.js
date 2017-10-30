const STORAGE_KEY = 'jwt-token';

export default {

  store(token) {
    localStorage.setItem(STORAGE_KEY, token);
  },

  get() {
    return localStorage.getItem(STORAGE_KEY);
  },

  remove() {
    return localStorage.removeItem(STORAGE_KEY);
  }

}
