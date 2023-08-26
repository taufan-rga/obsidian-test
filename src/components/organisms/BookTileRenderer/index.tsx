import React from 'react';
import {Book} from '../../../core/domain/models/book';
import {ListView} from '../../atoms';
import BookTile from '../../molecules/BookTile';
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
    />
  );
}

function keyExtractor({id}: {id: string}) {
  return `${id}`;
}

function renderItem({item}: {item: Book}) {
  return <BookTile {...item} />;
}
