const SignInForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-center mb-5 text-2xl uppercase">Sign In</h1>

      <div>
        <label htmlFor="email"></label>
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="email"
          name="email"
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          className="border-2 rounded-md w-[250px] h-10 px-3"
          type="password"
          name="password"
          placeholder="password"
        />
      </div>

      <button className="h-10 bg-blue-500 text-white rounded-md mt-3" type="submit">
        로그인
      </button>
    </form>
  )
}

export default SignInForm
