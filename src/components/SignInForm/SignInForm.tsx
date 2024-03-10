import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { signIn } from '../../features/user/userSlice'

const SignInForm = () => {
  const dispatch = useAppDispatch()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = userInfo
    dispatch(signIn({ email, password }))
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h1 className="text-center mb-5 text-2xl uppercase">Sign In</h1>

      <div>
        <label htmlFor="email"></label>
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="email"
          name="email"
          placeholder="email"
          value={userInfo.email}
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handleInput}
        />
      </div>

      <button className="h-10 bg-blue-500 text-white rounded-md mt-3" type="submit">
        로그인
      </button>
    </form>
  )
}

export default SignInForm
