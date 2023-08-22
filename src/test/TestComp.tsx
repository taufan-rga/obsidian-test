import {DependenciesOf, injectComponent} from 'react-obsidian';
import {CounterGraph} from './graph';
import {View} from 'react-native';

type Props = DependenciesOf<CounterGraph, 'useViewModel' | 'model'>;

function _TestComp({useViewModel, model}: Props) {
  console.log({model});

  return <View />;
}

export const TestComp = injectComponent(_TestComp, CounterGraph);
