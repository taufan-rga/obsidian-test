import { get } from 'lodash';
import { School } from '~types/redux/school';

interface DataProps {
  id_school: number;
  name_school: string;
}

export function modifySchool(data: DataProps): School {
  return {
    name: get(data, 'name_school'),
    id: get(data, 'id_school'),
  };
}
