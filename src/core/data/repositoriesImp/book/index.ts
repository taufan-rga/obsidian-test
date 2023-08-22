import {Book} from '../../../domain/models/book';
import {BookRepository} from '../../../domain/repositories/book';
import {BookApiDataSource} from '../../dataSources/book';

export default class BookRepositoryImp implements BookRepository {
  bookApiDataSource: BookApiDataSource;

  constructor(bookApiDataSource: BookApiDataSource) {
    this.bookApiDataSource = bookApiDataSource;
  }

  async getBooks(): Promise<Book[]> {
    return await this.bookApiDataSource.getBooks();
  }

  async insertBook(book: Book): Promise<Book> {
    return this.bookApiDataSource.addBook(book);
  }

  async deleteBook(id: string): Promise<Book> {
    return this.bookApiDataSource.deleteBook(id);
  }

  updateBook(book: Book): Promise<Book> {
    return this.bookApiDataSource.updateBook(book);
  }
}
