import {Text, View} from 'react-native';
import {AddTask} from './src/components/molecules/AddTask';
import {TaskList} from './src/components/organisms/TaskList';

export default function () {
  return (
    <View>
      <Text>Day off in Kyoto</Text>
      <AddTask />
      <TaskList />
    </View>
  );
}
