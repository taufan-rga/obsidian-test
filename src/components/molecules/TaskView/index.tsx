import {useState} from 'react';
import {DependenciesOf, injectComponent, useObserver} from 'react-obsidian';
import {Task} from '../../../model/task';
import {AppGraph} from '../../../graph/AppGraph';
import {Button, Text, TextInput, View} from 'react-native';

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
      <View>
        <Text> {text}</Text>
        <Button onPress={() => setIsEditing(true)} title="Edit" />
      </View>
    );
  }
  return (
    <View>
      <Checkbox isChecked={isCompleted} onChange={e => setIsCompleted(e)} />
      <Text>{taskContent}</Text>
      <Button onPress={() => model.deleteTask(task)} title="Delete" />
    </View>
  );
}, AppGraph);

function Checkbox({}: {
  onChange?(isChecked: boolean): void;
  isChecked?: boolean;
}) {
  return <View></View>;
}
