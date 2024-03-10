import { useAppDispatch } from '../../app/hooks'
import { signOut } from '../../features/user/userSlice'

const MainPage = () => {
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <div className="h-full flex justify-center items-center flex-col gap-5">
      <h1 className="text-3xl">MainPage</h1>
      <div>
        <button
          className="px-10 py-2 rounded-md text-xl bg-red-500 text-white"
          onClick={handleSignOut}
        >
          logout
        </button>
      </div>
    </div>
  )
}

export default MainPage
