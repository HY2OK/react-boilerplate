import { useState } from 'react'
import SignInForm from '../../components/SignInForm/SignInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

const SignPage = () => {
  const [hasAccount, setHasAccount] = useState(false)

  return (
    <div className="h-full flex justify-center items-center flex-col gap-12">
      {hasAccount ? (
        <>
          <SignUpForm setHasAccount={setHasAccount} />
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
