import {renderHook, waitFor} from '@testing-library/react-native';
import {mock} from 'jest-mock-extended';
import {when} from 'jest-when';
import {useGetBooksCase} from '.';
import {BookRepository} from '../../../repositories/book';
import {wrapper} from '../../../../../config/reactQuery';

let repository: BookRepository;

beforeEach(() => {
  repository = mock();
  when(repository.getBooks).mockResolvedValue([
    {id: 'test', title: 'test', description: '', price: 0, cover: ''},
    {id: 'test', title: 'test', description: '', price: 0, cover: ''},
  ]);
});

describe('Get Books Use Case', () => {
  it('useGetBooksCase should call repository.getBooks', async () => {
    const {result} = renderHook(() => useGetBooksCase(repository), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current).toHaveLength(2);
      expect(result.current?.[0]?.title).toEqual('test');
      expect(repository.getBooks).toHaveBeenCalledTimes(1);
    });
  });
});
