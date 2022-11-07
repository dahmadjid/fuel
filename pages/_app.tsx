import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import {theme} from "../utils/theme"
import { QueryClient, QueryClientProvider} from 'react-query'
export default function App({ Component, pageProps }: AppProps) {
  return (
  <QueryClientProvider client={new QueryClient}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </QueryClientProvider>
  );
}
