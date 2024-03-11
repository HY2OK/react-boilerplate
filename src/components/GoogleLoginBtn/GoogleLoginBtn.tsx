import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../../firebase'

const GoogleLoginBtn = () => {
  const handleGoogle = async () => {
    try {
      const auth = getAuth(app)
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={handleGoogle}>
      <img className="w-10" src="/src/assets/google.png" alt="google" />
    </button>
  )
}

export default GoogleLoginBtn
