import {QueryClient, QueryClientProvider} from 'react-query';

export const queryClient = new QueryClient();

const queryClientTest = new QueryClient();

queryClientTest.setDefaultOptions({queries: {cacheTime: 0}});

export const wrapper = ({children}: any) => (
  <QueryClientProvider client={queryClientTest}>{children}</QueryClientProvider>
);
