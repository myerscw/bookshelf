import {QueryClient, QueryCache} from 'react-query'

export const queryClient = new QueryClient({
  queryCache: new QueryCache(),
})
