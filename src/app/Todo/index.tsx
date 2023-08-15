import {Text, View} from 'react-native';
import {TaskList} from '../../components/organisms/TaskList';
import {AddTask} from '../../components/molecules/AddTask';

export default function () {
  return (
    <View>
      <Text>Day off in Kyoto</Text>
      <AddTask />
      <TaskList />
    </View>
  );
}
