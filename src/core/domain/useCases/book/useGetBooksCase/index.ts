import {useQuery} from 'react-query';
import {BookRepository} from '~core/domain/repositories/book';

export function useGetBooksCase(repository: BookRepository) {
  const {data} = useQuery({
    queryKey: ['books', 'list'],
    queryFn: () => repository.getBooks(),
  });
  return data;
}
