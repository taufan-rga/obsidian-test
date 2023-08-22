import {DependenciesOf, injectHook} from 'react-obsidian';
import BookGraph from '../../di/book';
import {useGetBooksCase} from '../../domain/useCases/book';

type props = DependenciesOf<BookGraph, 'repo'>;

function useBookViewModel({repo}: props) {
  const books = useGetBooksCase(repo);

  return {books};
}

export default injectHook(useBookViewModel, BookGraph);
