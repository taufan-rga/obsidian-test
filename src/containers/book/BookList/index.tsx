import {FlatList, Text, View, StyleSheet, Image} from 'react-native';
import useAppViewModel from '../../../core/presentation/useAppViewModel';
import {useEffect} from 'react';

export default function () {
  const {getBooks, books} = useAppViewModel();

  useEffect(() => {
    getBooks();
  }, []);

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
