import {useObserver} from 'react-obsidian';
import {TaskTempModel} from '../../model/tasksModel';

export const useTaskTempViewModel = (model: TaskTempModel) => {
  const [text] = useObserver(model.text);

  return {
    text,
    textSet: (input: string) => model.changeText(input),
  };
};
