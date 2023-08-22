import {transformBooks} from '../../../../parser/book';
import book, {
  addBookApi,
  deleteBookApi,
  getBooksApi,
  updateBookApi,
} from '../../../../services/book';
import {Book} from '../../../domain/models/book';
import {BookApiDataSource} from '../../dataSources/book';

export default class BookApiDataSourceImp implements BookApiDataSource {
  async getBooks(): Promise<Book[]> {
    const {data} = await book.get();
    return transformBooks(data);
  }

  async deleteBook(id: string): Promise<Book> {
    try {
      const result = await deleteBookApi(id);
      return result.data;
    } catch (error) {
      return {} as any;
    }
  }

  async addBook(book: Book): Promise<Book> {
    try {
      const result = await addBookApi(book);
      return result.data;
    } catch (error) {
      return book as any;
    }
  }

  async updateBook(book: Book): Promise<Book> {
    try {
      const result = await updateBookApi(book);
      return result.data;
    } catch (error) {
      return book as any;
    }
  }
}
