import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/config/reactQuery';
import Routes from './src/routes';

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}
