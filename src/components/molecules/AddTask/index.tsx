import {Button, TextInput, View} from 'react-native';
import {DependenciesOf, injectComponent} from 'react-obsidian';
import {AppGraph} from '../../../graph/AppGraph';

type Injected = DependenciesOf<AppGraph, 'model' | 'useTaskTempViewModel'>;

function AddTask({model, useTaskTempViewModel}: Injected) {
  const {text, textSet} = useTaskTempViewModel();

  return (
    <View style={{marginBottom: 24}}>
      <TextInput
        placeholder="Add task"
        value={text}
        onChangeText={e => textSet(e)}
      />
      <Button
        onPress={() => {
          textSet('');
          model.addTask(text);
        }}
        title="Add"
      />
    </View>
  );
}

export default injectComponent(AddTask, AppGraph);
