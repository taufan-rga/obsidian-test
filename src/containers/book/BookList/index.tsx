import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {DependenciesOf, injectComponent} from 'react-obsidian';
import BookGraph from '../../../core/di/book';

type Props = DependenciesOf<BookGraph, 'useBookListViewModel'>;

function BookList({useBookListViewModel}: Props) {
  const {books} = useBookListViewModel();

  return (
    <View>
      <FlatList
        data={books}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.cover}} style={styles.cover} />
            <View style={styles.contetWrap}>
              <View style={styles.content}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
              <View style={styles.content}>
                <Text>${item.price}</Text>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.container}
        keyExtractor={({id}) => `${id}`}
      />
    </View>
  );
}

export default injectComponent(BookList, BookGraph);

const styles = StyleSheet.create({
  container: {marginTop: 24},
  card: {
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  cover: {
    width: 80,
    height: 120,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  contetWrap: {flex: 1, justifyContent: 'space-between', paddingBottom: 4},
  content: {gap: 8},
  titleText: {fontWeight: 'bold', fontSize: 16},
});
