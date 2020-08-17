import Head from 'next/head'
import { Header } from 'components'

interface LayoutProps extends React.ComponentProps<'div'> {}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>title goes here</title>
      </Head>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
