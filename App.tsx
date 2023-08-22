import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/config/reactQuery';
import BookList from './src/containers/book/BookList';

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <BookList />
    </QueryClientProvider>
  );
}
