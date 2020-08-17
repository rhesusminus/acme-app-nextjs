import { Layout } from 'components'
import withSession from 'lib/session'

export default function Something() {
  return <Layout>something</Layout>
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user')

  if (user === undefined) {
    res.setHeader('Location', '/login')
    res.statusCode = 302
    res.end()

    return { props: {} }
  }

  return { props: { user } }
})
