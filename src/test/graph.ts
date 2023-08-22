import {
  Graph,
  ObjectGraph,
  Observable,
  Provides,
  Singleton,
  useObserver,
} from 'react-obsidian';

class CounterModel {
  public count = new Observable(0);

  public increment() {
    this.count.value++;
  }
}

const useCounterViewModel = (model: CounterModel) => {
  const [count] = useObserver(model.count);

  return {
    count,
    onIncrementClick: () => model.increment(),
  };
};

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
