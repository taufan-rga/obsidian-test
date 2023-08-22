import {useQuery} from 'react-query';
import {BookRepository} from '../../repositories/book';

export function useGetBooksCase(repository: BookRepository) {
  const {data} = useQuery({
    queryKey: ['books', 'list'],
    queryFn: () => repository.getBooks(),
  });
  return data;
}
