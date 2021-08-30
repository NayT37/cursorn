import {API_URL} from '../../config/env-variables';

export const booksEndpoint = `${API_URL}books/all`;
export const booksDetailEndpoint = (id: number) => `${API_URL}books/${id}`;
