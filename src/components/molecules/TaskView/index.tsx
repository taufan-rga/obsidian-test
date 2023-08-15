import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {DependenciesOf, injectComponent, useObserver} from 'react-obsidian';
import {AppGraph} from '../../../graph/AppGraph';
import {Task} from '../../../model/task';

type Own = {task: Task};
type Injeted = DependenciesOf<AppGraph, 'model'>;

function _TaskView({task, model}: Own & Injeted) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useObserver(task.text);
  const [isCompleted, setIsCompleted] = useObserver(task.isCompleted);

  return (
    <View style={{gap: 8}}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        <Checkbox isChecked={isCompleted} onChange={e => setIsCompleted(e)} />
        {isEditing ? (
          <TextInput
            value={text}
            onChangeText={e => setText(e)}
            style={{flex: 1}}
          />
        ) : (
          <Text>{text}</Text>
        )}
      </View>
      <View style={{flexDirection: 'row', gap: 16, width: '100%'}}>
        <View style={{flex: 1}}>
          <Button
            onPress={() => setIsEditing(c => !c)}
            title={isEditing ? 'Save' : 'Edit'}
          />
        </View>
        <View style={{flex: 1}}>
          <Button onPress={() => model.deleteTask(task)} title="Delete" />
        </View>
      </View>
    </View>
  );
}

export default injectComponent(_TaskView, AppGraph);

function Checkbox({
  onChange,
  isChecked,
}: {
  onChange(isChecked: boolean): void;
  isChecked?: boolean;
}) {
  return (
    <Button
      {...(isChecked && {color: 'green'})}
      title={isChecked ? 'UNCHECK' : 'CHECK'}
      onPress={() => onChange(!isChecked)}
    />
  );
}
