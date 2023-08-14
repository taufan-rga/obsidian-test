import {useState} from 'react';
import {DependenciesOf, injectComponent} from 'react-obsidian';
import {AppGraph} from '../../../graph/AppGraph';
import {Button, TextInput} from 'react-native';

type Injected = DependenciesOf<AppGraph, 'model'>;

export const AddTask = injectComponent(({model}: Injected) => {
  const [text, setText] = useState('');
  return (
    <>
      <TextInput
        placeholder="Add task"
        value={text}
        onChangeText={e => setText(e)}
      />
      <Button
        onPress={() => {
          setText('');
          model.addTask(text);
        }}
        title="Add"
      />
    </>
  );
}, AppGraph);
