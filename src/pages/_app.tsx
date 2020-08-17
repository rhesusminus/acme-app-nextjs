import { AppProps } from 'next/app'
import { AuthProvider } from 'components'
import 'styles/index.css'

const App = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
)

export default App
