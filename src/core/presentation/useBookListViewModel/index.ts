import {BookRepository} from '~core/domain/repositories/book';
import {useGetBooksCase} from '~core/domain/useCases/book/useGetBooksCase';

export default function (repo: BookRepository) {
  const books = useGetBooksCase(repo);

  return {books};
}
