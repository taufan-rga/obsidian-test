import {Text, View} from 'react-native';
import AddTask from '../../components/molecules/AddTask';
import TaskList from '../../components/organisms/TaskList';

export default function () {
  return (
    <View>
      <Text>Day off in Kyoto</Text>
      <AddTask />
      <TaskList />
    </View>
  );
}
