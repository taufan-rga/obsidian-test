import BookApiDataSourceImp from '../../data/dataSourcesImp/book';
import BookRepositoryImp from '../../data/repositoriesImp/book';
import {useGetBooksCase} from '../../domain/useCases/book';

export default function () {
  const bookRepositoryImp = new BookRepositoryImp(new BookApiDataSourceImp());

  const books = useGetBooksCase(bookRepositoryImp);

  return {books};
}
