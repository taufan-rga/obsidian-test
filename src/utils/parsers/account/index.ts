import { get } from 'lodash';
import { Account } from '~types/redux/account';
import { AuthenticationSliceActionsProps } from '~types/redux/authentication';
import { AccountRole, Gender } from '~types/services';

interface DataProps {
  gender: null | 'M' | 'F';
  id_school: number;
  is_active: boolean;
  name: string;
  picture: null | string;
}

export function userDetail(data: DataProps): AuthenticationSliceActionsProps['updateProfile'] {
  return {
    gender: get(data, 'gender', null),
    isActive: get(data, 'is_active'),
    name: get(data, 'name'),
    picture: get(data, 'picture', null),
    school: {
      id: get(data, 'school.id_school'),
      name: get(data, 'school.name_school'),
    },
    isRequestingAdmin: get(data, 'is_requesting_admin'),
  };
}

interface UserListDb {
  name: string;
  nip: string;
  gender: Gender;
  picture: string;
  is_active: boolean;
  role: AccountRole;
  school: {
    name_school: string;
    id_school: number;
  };
}

export function userList(data: UserListDb): Account {
  return {
    gender: get(data, 'gender'),
    isActive: get(data, 'is_active'),
    name: get(data, 'name'),
    nip: get(data, 'nip'),
    picture: get(data, 'picture'),
    role: get(data, 'role'),
    school: {
      id: get(data, 'school.id_school'),
      name: get(data, 'school.name_school'),
    },
  };
}
