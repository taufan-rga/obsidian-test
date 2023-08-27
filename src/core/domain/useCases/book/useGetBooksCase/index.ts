import {useQuery} from 'react-query';
import {Book} from '~core/domain/models/book';
import {BookRepository} from '~core/domain/repositories/book';

export function useGetBooksCase(repository: BookRepository): Book[] {
  const {data} = useQuery({
    queryKey: ['books', 'list'],
    queryFn: () => repository.getBooks(),
  });
  return data || [];
}
