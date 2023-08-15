import {useObserver} from 'react-obsidian';
import {CounterModel} from '../model/counter';

export const useCounterViewModel = (model: CounterModel) => {
  const [count] = useObserver(model.count);

  return {
    count,
    onIncrementClick: () => model.increment(),
  };
};
