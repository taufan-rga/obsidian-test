import {Graph, ObjectGraph, Provides, Singleton} from 'react-obsidian';
import {CounterModel} from '../../model/counter';
import {useCounterViewModel} from '../../viewModel/counterViewModel';

@Singleton()
@Graph()
export class CounterGraph extends ObjectGraph {
  @Provides()
  model(): CounterModel {
    return new CounterModel();
  }

  // The useViewModel hook is instantiated once and injected into the Counter component
  @Provides()
  useViewModel(model: CounterModel) {
    return () => useCounterViewModel(model);
  }
}
