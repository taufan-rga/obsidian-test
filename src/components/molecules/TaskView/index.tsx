import {useState} from 'react';
import {DependenciesOf, injectComponent, useObserver} from 'react-obsidian';
import {Task} from '../../../model/task';
import {AppGraph} from '../../../graph/AppGraph';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

type Own = {task: Task};
type Injeted = DependenciesOf<AppGraph, 'model'>;

export const TaskView = injectComponent(({task, model}: Own & Injeted) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useObserver(task.text);
  const [isCompleted, setIsCompleted] = useObserver(task.isCompleted);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <View>
        <TextInput value={text} onChangeText={e => setText(e)} />
        <Button onPress={() => setIsEditing(false)} title="Save" />
      </View>
    );
  } else {
    taskContent = (
      <View style={{gap: 8}}>
        <Text>{text}</Text>
        <Button onPress={() => setIsEditing(true)} title="Edit" />
      </View>
    );
  }
  return (
    <View style={{gap: 8}}>
      <Checkbox isChecked={isCompleted} onChange={e => setIsCompleted(e)} />
      <View>{taskContent}</View>
      <Button onPress={() => model.deleteTask(task)} title="Delete" />
    </View>
  );
}, AppGraph);

function Checkbox({
  onChange,
  isChecked,
}: {
  onChange(isChecked: boolean): void;
  isChecked?: boolean;
}) {
  return (
    <Button
      title={isChecked ? 'UNCHECK' : 'CHECK'}
      onPress={() => onChange(!isChecked)}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: 'red',
    flex: 1,
  },
});
