import { useState } from 'react'
import SignInForm from '../../components/SignInForm/SignInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import GithubLoginBtn from '../../components/GithubLoginBtn/GithubLoginBtn'
import GoogleLoginBtn from '../../components/GoogleLoginBtn/GoogleLoginBtn'

const SignPage = () => {
  const [hasAccount, setHasAccount] = useState(false)

  return (
    <div className="h-full flex justify-center items-center flex-col gap-7">
      {hasAccount ? (
        <>
          <SignUpForm />
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => setHasAccount(false)}
          >
            Sign In Your Account
          </div>
        </>
      ) : (
        <>
          <SignInForm />
          <div className="flex justify-center items-center gap-4">
            <GoogleLoginBtn />
            <GithubLoginBtn />
          </div>

          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => setHasAccount(true)}
          >
            Create Account
          </div>
        </>
      )}
    </div>
  )
}

export default SignPage
