import {Graph, ObjectGraph, Provides, Singleton} from 'react-obsidian';
import {BookApiDataSource} from '../../data/dataSources/book';
import BookApiDataSourceImp from '../../data/dataSourcesImp/book';
import BookRepositoryImp from '../../data/repositoriesImp/book';
import {BookRepository} from '../../domain/repositories/book';

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
}
