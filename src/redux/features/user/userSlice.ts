import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import app from '../../../firebase'
import firebase from 'firebase/compat/app'

interface AuthState {
  user: firebase.User | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const auth = getAuth(app)
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
)

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const auth = getAuth(app)
      const res = await signInWithEmailAndPassword(auth, email, password)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },
)

export const signOut = createAsyncThunk('auth/signOut', async () => {
  try {
    const auth = getAuth(app)
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
})

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signUp.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message as string
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signIn.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message as string
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(signOut.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message as string
      })
  },
})

export default userSlice.reducer
