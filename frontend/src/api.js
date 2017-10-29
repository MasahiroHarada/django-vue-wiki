import axios from 'axios';

const FOLDER_URL = '/api/folders/';
const PAGE_URL = '/api/pages/';

export function fetchAllFoldersAPI() {
  return axios.get(FOLDER_URL);
}

export function fetchFolderAPI(folderId) {
  return axios.get(FOLDER_URL + folderId);
}

export function createFolderAPI(folderName) {
  return axios.post(FOLDER_URL, {name: folderName});
}

export function fetchPageAPI(pageId) {
  return axios.get(PAGE_URL + pageId);
}

export function createPageAPI(data) {
  return axios.post(PAGE_URL, data);
}

export function updatePageAPI(pageId, data) {
  return axios.patch(`${PAGE_URL}${pageId}/`, data);
}
