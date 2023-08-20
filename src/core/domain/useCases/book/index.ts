import {Book} from '../../models/book';
import {BookRepository} from '../../repositories/book';

export default class BookUseCase {
  private bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  async getBooks(): Promise<Book[]> {
    return this.bookRepository.getBooks();
  }

  async insertBook(book: Book): Promise<Book> {
    return this.bookRepository.insertBook(book);
  }

  async updateBook(book: Book): Promise<Book> {
    return this.bookRepository.updateBook(book);
  }

  async deleteBook(id: Book['id']): Promise<Book> {
    return this.bookRepository.deleteBook(id);
  }
}
