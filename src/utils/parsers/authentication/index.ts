import { get } from 'lodash';
import { AuthenticationSliceActionsProps } from '~types/redux/authentication';
import { AccountRole } from '~types/services';
interface DataProps {
  name: string;
  nip: string;
  role: AccountRole;
  token: string;
}

export function login(data: DataProps): AuthenticationSliceActionsProps['login'] {
  return {
    name: get(data, 'name'),
    nip: get(data, 'nip', null),
    role: get(data, 'role', 'unauthorized'),
    token: get(data, 'token', ''),
  };
}
