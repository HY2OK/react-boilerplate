import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import app from '../../firebase'

const GithubLoginBtn = () => {
  const handleGithub = async () => {
    try {
      const auth = getAuth(app)
      const provider = new GithubAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button onClick={handleGithub}>
      <img className="w-10" src="/src/assets/github.png" alt="github" />
    </button>
  )
}

export default GithubLoginBtn
