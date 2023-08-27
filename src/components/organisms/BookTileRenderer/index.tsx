import React from 'react';
import {ListView} from '~components/atoms';
import {BookTile} from '~components/molecules';
import {Book} from '~core/domain/models/book';
import styles from './styles';

interface BookTileRendererProps {
  data?: Book[];
}

export default function ({data}: BookTileRendererProps) {
  return (
    <ListView
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      estimatedItemSize={126}
    />
  );
}

function keyExtractor({id}: {id: string}) {
  return `${id}`;
}

function renderItem({item}: {item: Book}) {
  return <BookTile {...item} />;
}
