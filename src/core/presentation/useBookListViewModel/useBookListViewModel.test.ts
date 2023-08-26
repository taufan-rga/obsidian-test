import {renderHook, waitFor} from '@testing-library/react-native';
import useBookListViewModel from '.';
import {mock} from 'jest-mock-extended';
import {BookRepository} from '../../domain/repositories/book';
import {when} from 'jest-when';
import {wrapper} from '../../../config/reactQuery';

const repo: BookRepository = mock();

describe('Book List View Model', () => {
  it('Should return list of books', async () => {
    const {result} = renderHook(() => useBookListViewModel(repo), {wrapper});

    when(repo.getBooks).mockResolvedValue([
      {id: 'test', title: 'test', description: '', price: 0, cover: ''},
      {id: 'test', title: 'test', description: '', price: 0, cover: ''},
    ]);

    await waitFor(() => {
      expect(result.current.books).toHaveLength(2);
      expect(result.current?.books?.[0]?.title).toEqual('test');
      expect(repo.getBooks).toHaveBeenCalledTimes(1);
    });
  });
});
