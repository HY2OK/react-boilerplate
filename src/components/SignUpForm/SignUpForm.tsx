const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-center mb-5 text-2xl uppercase">Sign Up</h1>
      <label htmlFor="email">
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="email"
          name="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <label htmlFor="confirmPassword">
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </label>
      <button className="h-10 bg-blue-500 text-white rounded-md" type="submit">
        로그인
      </button>
    </form>
  )
}

export default SignUpForm
