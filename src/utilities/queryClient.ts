/* eslint-disable  @typescript-eslint/no-explicit-any */

import { QueryClient } from '@tanstack/react-query'
// import { messages } from 'app/messages'
// import { toast } from 'react-toastify'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      // throwOnError: (error: any) => {
      //   console.log({ error })
      //   return false
      // },
    },
    mutations: {
      retry: false,
      // throwOnError: (error: any) => {
      //   return false
      // },
    },
  },
})
