import {useState} from 'react';
import BookApiDataSourceImp from '../../data/dataSourcesImp/book';
import BookRepositoryImp from '../../data/repositoriesImp/book';
import BookUseCase from '../../domain/useCases/book';
import {Book} from '../../domain/models/book';

export default function () {
  const [books, setBooks] = useState<Book[]>([]);

  const bookDataSourceImp = new BookApiDataSourceImp();
  const bookRepositoryImp = new BookRepositoryImp(bookDataSourceImp);
  const bookUseCase = new BookUseCase(bookRepositoryImp);

  async function getBooks() {
    const result = await bookUseCase.getBooks();
    setBooks(result);
  }
  return {getBooks, books};
}
