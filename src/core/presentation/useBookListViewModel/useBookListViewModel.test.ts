import {renderHook, waitFor} from '@testing-library/react-native';
import {mock} from 'jest-mock-extended';
import {when} from 'jest-when';
import {wrapper} from '~config/reactQuery';
import {BookRepository} from '~core/domain/repositories/book';
import useBookListViewModel from './';

let repository: BookRepository;

beforeEach(() => {
  repository = mock();
  when(repository.getBooks).mockResolvedValue([
    {id: 'test1', title: 'test1', description: '', price: 0, cover: ''},
    {id: 'test2', title: 'tes2', description: '', price: 0, cover: ''},
  ]);
});

describe('Book List View Model', () => {
  it('Should return list of books', async () => {
    const {result} = renderHook(() => useBookListViewModel(repository), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.books).toHaveLength(2);
      expect(result.current?.books?.[0]?.title).toEqual('test1');
      expect(repository.getBooks).toHaveBeenCalledTimes(1);
    });
  });
});
