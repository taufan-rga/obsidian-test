import {
  addBookApi,
  deleteBookApi,
  getBooksApi,
  updateBookApi,
} from '../../../../services/book';
import {Book} from '../../../domain/models/book';
import {BookApiDataSource} from '../../dataSources/book';

export default class BookApiDataSourceImp implements BookApiDataSource {
  async getBooks(): Promise<Book[]> {
    try {
      const result = await getBooksApi();
      return result.data?.map((book: any) => ({
        id: book.id,
        title: book.title,
        description: book.description,
        price: book.price,
        cover: book.image_cover,
      }));
    } catch (error) {
      return [];
    }
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
