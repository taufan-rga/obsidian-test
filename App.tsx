import {View} from 'react-native';
import {Counter, SecondCounter} from './src/app/Counter';
import Todo from './src/app/Todo';

export default function () {
  return <Todo />;
  return (
    <View>
      <Counter />
      <SecondCounter />
    </View>
  );
}
