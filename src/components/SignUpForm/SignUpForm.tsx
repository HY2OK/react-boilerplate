import { ChangeEvent, FormEvent, useState } from 'react'
import { signUp } from '../../redux/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const SignUpForm = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password, confirmPassword } = userInfo

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }

    dispatch(signUp({ email, password }))
  }

  console.log(user)

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h1 className="text-center mb-5 text-2xl uppercase">Sign Up</h1>

      <div>
        <label htmlFor="email"></label>
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="email"
          name="email"
          placeholder="Email"
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
          placeholder="Password"
          value={userInfo.password}
          onChange={handleInput}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword"></label>
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userInfo.confirmPassword}
          onChange={handleInput}
        />
      </div>

      <button className="h-10 bg-blue-500 text-white rounded-md mt-3" type="submit">
        회원가입
      </button>
    </form>
  )
}

export default SignUpForm
