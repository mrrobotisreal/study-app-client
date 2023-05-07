import Button from '@cloudscape-design/components/button';
import google from './assets/Google__G__Logo.png';

export default function GoogleButton({
  handleGoogleSignin,
  handleGoogleSignup,
  isLoginVisible,
}) {

  return (
    <Button
      onClick={!isLoginVisible
        ? handleGoogleSignup
        : handleGoogleSignin
      }
    >
      <img src={google} alt="Google logo" width="15" height="15" />
      {!isLoginVisible
        ? ' Sign up with Google'
        : ' Sign in with Google'
      }{' '}
    </Button>
  )
}