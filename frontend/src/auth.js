const TOKEN_STORAGE_KEY = 'jwt-auth';
const NEXT_URL_STORAGE_KEY = 'next-url';

export default {

  login(token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    const nextRoute = localStorage.getItem(NEXT_URL_STORAGE_KEY);
    if (nextRoute) {
      localStorage.removeItem(NEXT_URL_STORAGE_KEY);
      return nextRoute;
    }
    return {name: 'folderIndex'};
  },

  getToken() {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  },

  logout() {
    return localStorage.removeItem(TOKEN_STORAGE_KEY);
  },

  rememberUrl(url) {
    localStorage.setItem(NEXT_URL_STORAGE_KEY, url);
  }

}
