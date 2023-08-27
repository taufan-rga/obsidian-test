import {BookApiDataSource} from '~core/data/dataSources/book';
import {Book} from '~core/domain/models/book';
import {BookRepository} from '~core/domain/repositories/book';

export default class BookRepositoryImp implements BookRepository {
  constructor(private bookApiDataSource: BookApiDataSource) {}

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
