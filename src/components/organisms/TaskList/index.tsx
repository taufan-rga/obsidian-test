import {DependenciesOf, injectComponent, useObserver} from 'react-obsidian';
import {AppGraph} from '../../../graph/AppGraph';
import {FlatList, View} from 'react-native';
import TaskView from '../../molecules/TaskView';

type Injected = DependenciesOf<AppGraph, 'model'>;

function _TaskList({model}: Injected) {
  const [tasks] = useObserver(model.tasks);

  return (
    <FlatList
      data={tasks}
      keyExtractor={({id}) => id}
      renderItem={({item: task}) => <TaskView task={task} />}
      ItemSeparatorComponent={() => <View style={{marginBottom: 16}} />}
    />
  );
}

export default injectComponent(_TaskList, AppGraph);
