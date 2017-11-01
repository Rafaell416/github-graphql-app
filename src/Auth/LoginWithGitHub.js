import { AuthSession } from 'expo'

const GB_APP_ID = '2b11be95d4acc126197a'

signInWithGitHub = async (navigation) => {
  let redirectUrl = AuthSession.getRedirectUrl()
  let result = await AuthSession.startAsync({
      authUrl:
         `https://github.com/login/oauth/authorize?` +
         `&client_id=${GB_APP_ID}` +
         `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
      })
  return result
  navigation.navigate('HomeScreen')
}

export { signInWithGitHub }
