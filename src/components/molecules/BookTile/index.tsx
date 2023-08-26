import React from 'react';
import {View} from 'react-native';
import {Phrase, Picture} from '../../atoms';
import styles from './styles';
import {currencyFormatter} from '../../../helpers';

interface BookTileProps {
  cover?: string;
  title: string;
  description: string;
  price: number;
}

export default function ({description, price, title, cover}: BookTileProps) {
  return (
    <View style={styles.card}>
      <Picture uri={cover} />
      <View style={styles.contetWrap}>
        <View style={styles.content}>
          <Phrase type={'mBold'}>{title}</Phrase>
          <Phrase>{description}</Phrase>
        </View>
        <View style={styles.content}>
          <Phrase>{currencyFormatter(price)}</Phrase>
        </View>
      </View>
    </View>
  );
}
