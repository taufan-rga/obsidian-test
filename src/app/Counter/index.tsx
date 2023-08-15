import {Button, Text, View} from 'react-native';
import {DependenciesOf, injectComponent} from 'react-obsidian';
import {CounterGraph} from '../../graph/CounterGraph';

// the viewModel hook is injected by the CounterGraph
const _Counter = ({model}: DependenciesOf<CounterGraph, 'model'>) => {
  return (
    <View>
      <Button onPress={() => model.increment()} title="Increment" />
      {/* <Text>{model.count.value}</Text> */}
    </View>
  );
};

export const Counter = injectComponent(_Counter, CounterGraph);

const _SecondCounter = ({
  useViewModel,
}: DependenciesOf<CounterGraph, 'useViewModel'>) => {
  const {count, onIncrementClick} = useViewModel();

  return (
    <View>
      <Button onPress={onIncrementClick} title="Increment" />
      <Text>{count}</Text>
    </View>
  );
};

export const SecondCounter = injectComponent(_SecondCounter, CounterGraph);
