import {BookRepository} from '../../domain/repositories/book';
import {useGetBooksCase} from '../../domain/useCases/book';

export default function (repo: BookRepository) {
  const books = useGetBooksCase(repo);

  return {books};
}
