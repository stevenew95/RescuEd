import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    primary_certification: 'EMT-B' as const,
    renewal_date: '2025-12-31'
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const { signUp, signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password, userData)
        if (error) throw error
        setMessage('Check your email for verification link!')
      } else {
        const { error } = await signIn(email, password)
        if (error) throw error
        setMessage('Signed in successfully!')
      }
    } catch (error: any) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        {isSignUp ? 'Create Account' : 'Sign In'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
            required
          />
        </div>

        {isSignUp && (
          <>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={userData.username}
                onChange={(e) => setUserData({...userData, username: e.target.value})}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={userData.first_name}
                onChange={(e) => setUserData({...userData, first_name: e.target.value})}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={userData.last_name}
                onChange={(e) => setUserData({...userData, last_name: e.target.value})}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <select
                value={userData.primary_certification}
                onChange={(e) => setUserData({...userData, primary_certification: e.target.value as any})}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600"
              >
                <option value="EMT-B">EMT-Basic</option>
                <option value="AEMT">Advanced EMT</option>
                <option value="EMTP">EMT-Paramedic</option>
              </select>
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-sm ${message.includes('error') ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}

      <button
        onClick={() => setIsSignUp(!isSignUp)}
        className="w-full mt-4 text-blue-400 hover:text-blue-300"
      >
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
    </div>
  )
}