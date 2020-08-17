import React from 'react'
import { Layout } from 'components'
import withSession from 'lib/session'
import { LoginResponse } from 'types'
import { useAuthDispatch, SET_USER } from 'components'

type DashboardProps = {
  user?: LoginResponse
}

function Dashboard(props: DashboardProps) {
  const authDispatch = useAuthDispatch()
  const { username, userId, isLoggedIn } = props.user

  React.useEffect(() => {
    authDispatch({
      type: SET_USER,
      username: username,
      userId: userId,
      isLoggedIn: isLoggedIn
    })
  }, [username, userId, isLoggedIn])

  return <Layout></Layout>
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

export default Dashboard
