import { useAppDispatch } from '../../app/hooks'
import { signOut } from '../../features/user/userSlice'

const MainPage = () => {
  const dispatch = useAppDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <div>
      MainPage
      <div>
        <button className="bg-slate-500 text-white" onClick={handleSignOut}>
          logout
        </button>
      </div>
    </div>
  )
}

export default MainPage
