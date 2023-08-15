import {DependenciesOf, injectComponent, useObserver} from 'react-obsidian';
import {AppGraph} from '../../../graph/AppGraph';
import {TaskView} from '../../molecules/TaskView';
import {FlatList, View} from 'react-native';

type Injected = DependenciesOf<AppGraph, 'model'>;

export const TaskList = injectComponent(({model}: Injected) => {
  const [tasks] = useObserver(model.tasks);

  return (
    <FlatList
      data={tasks}
      keyExtractor={({id}) => id}
      renderItem={({item: task}) => <TaskView task={task} />}
      ItemSeparatorComponent={() => <View style={{marginBottom: 16}} />}
    />
  );
}, AppGraph);
