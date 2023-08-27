import {Graph, ObjectGraph, Provides, Singleton} from 'react-obsidian';
import {BookApiDataSource} from '~core/data/dataSources/book';
import BookApiDataSourceImp from '~core/data/dataSourcesImp/book';
import BookRepositoryImp from '~core/data/repositoriesImp/book';
import {BookRepository} from '~core/domain/repositories/book';
import useBookListViewModel from '~core/presentation/useBookListViewModel';

@Singleton()
@Graph()
export default class BookGraph extends ObjectGraph {
  @Provides()
  datasource(): BookApiDataSourceImp {
    return new BookApiDataSourceImp();
  }

  @Provides()
  repo(datasource: BookApiDataSource): BookRepository {
    return new BookRepositoryImp(datasource);
  }

  @Provides()
  useBookListViewModel(repo: BookRepository) {
    return () => useBookListViewModel(repo);
  }
}
