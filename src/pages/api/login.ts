import withSession from 'lib/session'
import { User } from 'types'

const defaultUser: User = {
  id: 1,
  username: 'kissa',
  password: 'kissa'
}

export default withSession(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const { username, password } = await req.body

  if (username !== defaultUser.username || password !== defaultUser.password) {
    return res.status(401).json({ error: 'invalid username or password' })
  }

  try {
    const user = { isLoggedIn: true, userId: defaultUser.id, username: defaultUser.username }
    req.session.set('user', user)
    await req.session.save()

    res.json(user)
  } catch (error) {
    res.status(error.response.fetchResponse?.status || 500).json(error.data)
  }
})
