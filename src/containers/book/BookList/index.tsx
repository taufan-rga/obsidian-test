import {DependenciesOf, injectComponent} from 'react-obsidian';
import {BookTileRenderer} from '~components/organisms';
import {Screen} from '~components/templates';
import BookGraph from '~core/di/book';

type Props = DependenciesOf<BookGraph, 'useBookListViewModel'>;

function BookList({useBookListViewModel}: Props) {
  const {books} = useBookListViewModel();

  return (
    <Screen>
      <BookTileRenderer data={books} />
    </Screen>
  );
}

export default injectComponent(BookList, BookGraph);
