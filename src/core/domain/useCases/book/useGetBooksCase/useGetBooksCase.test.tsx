import {renderHook, waitFor} from '@testing-library/react-native';
import {QueryClientProvider} from 'react-query';
import {useGetBooksCase} from '.';
import {queryClient} from '../../../../../config/reactQuery';
import {BookRepository} from '../../../repositories/book';

const mockBookRepository: BookRepository = {
  getBooks: jest.fn().mockReturnValue([1, 2]),
  insertBook: jest.fn(),
  updateBook: jest.fn(),
  deleteBook: jest.fn(),
};

queryClient.setDefaultOptions({queries: {cacheTime: 0}});

const wrapper = ({children}: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Get Books Use Case', () => {
  it('useGetBooksCase should call repository.getBooks', async () => {
    const {result} = renderHook(() => useGetBooksCase(mockBookRepository), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current).toHaveLength(2);
      expect(mockBookRepository.getBooks).toHaveBeenCalledTimes(1);
    });
  });
});
