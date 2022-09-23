import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { HeaderComponent } from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
