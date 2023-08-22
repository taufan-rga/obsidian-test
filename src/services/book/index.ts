import axios from 'axios';
import {Book} from '../../core/domain/models/book';
import apiClient from '../../config/apiClient';

export async function getBooksApi() {
  return axios.get('http://192.168.1.16:3005/books');
}

export async function addBookApi(book: Book) {
  return axios.post('http://192.168.1.16:3005/books', book);
}

export async function updateBookApi(book: Book) {
  return axios.put(`http://192.168.1.16:3005/books/${book.id}`, book);
}

export async function deleteBookApi(id: Book['id']) {
  return axios.delete(`http://192.168.1.16:3005/books/${id}`);
}

export default {get: () => apiClient.get('/books')};
