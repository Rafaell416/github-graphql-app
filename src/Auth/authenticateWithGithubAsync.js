import { AuthSession } from 'expo'
import credentials from './credentials'

// I should store this on a server ;)
const CLIENT_ID = credentials.github.clientId
const CLIENT_SECRET = credentials.github.clientSecret

const REDIRECT_URL = AuthSession.getRedirectUrl()
const AUTH_URL =
  'https://github.com/login/oauth/authorize' +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}`

export default authenticateWithGithubAsync = async () => {
  try {
    let authResult = await AuthSession.startAsync({
      authUrl: AUTH_URL
    })
    if (authResult.type !== 'success') {
      return
    }
    let code = authResult.params.code
    let result = await _createTokenWithCode(code)
    return result.access_token
  } catch (e) {
    console.error(e)
    return null
  }
}

_createTokenWithCode = (code) => {
  const url =
    'https://github.com/login/oauth/access_token' +
    `?client_id=${CLIENT_ID}` +
    `&client_secret=${CLIENT_SECRET}` +
    `&code=${code}`

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())
}
