import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Heart, 
  AlertCircle,
  CheckCircle,
  User
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<'email' | 'username'>('email')
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    // TODO: Implement Supabase auth
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Login attempt:', {
        method: loginMethod,
        identifier: loginMethod === 'email' ? formData.email : formData.username,
        password: formData.password
      })
      // Redirect to dashboard on success
    } catch (err) {
      setError('Invalid credentials. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (error) setError('') // Clear error when user starts typing
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black">
                Rescu<span className="text-blue-200">Ed</span>
              </span>
            </div>

            <h1 className="text-5xl font-black leading-tight mb-6">
              Welcome Back to{' '}
              <span className="block text-blue-200">
                Professional EMS Education
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed mb-12">
              Continue your learning journey with content that respects your intelligence 
              and advances your career.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {[
                { icon: '🎯', text: 'Current protocols and best practices' },
                { icon: '📱', text: 'Learn anywhere, anytime' },
                { icon: '🏆', text: 'Professional development that matters' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-blue-100">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-12">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white">
              Rescu<span className="text-primary-400">Ed</span>
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">Sign In</h2>
            <p className="text-gray-400">
              Access your professional education platform
            </p>
          </div>

          {/* Login Method Toggle */}
          <div className="flex bg-white/5 rounded-xl p-1 mb-8">
            <motion.button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                loginMethod === 'email'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Email
            </motion.button>
            <motion.button
              onClick={() => setLoginMethod('username')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all duration-300 ${
                loginMethod === 'username'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <User className="w-4 h-4" />
              Username
            </motion.button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/Username Input */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                {loginMethod === 'email' ? 'Email Address' : 'Username'}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  {loginMethod === 'email' ? (
                    <Mail className="w-5 h-5 text-gray-400" />
                  ) : (
                    <User className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <input
                  type={loginMethod === 'email' ? 'email' : 'text'}
                  value={loginMethod === 'email' ? formData.email : formData.username}
                  onChange={(e) => handleInputChange(loginMethod, e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder={loginMethod === 'email' ? 'your.email@example.com' : 'your_username'}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                className="flex items-center gap-3 bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </motion.div>
            )}

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-500 bg-white/5 border border-white/10 rounded focus:ring-primary-500 focus:ring-2"
                />
                <span className="text-gray-400">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-semibold"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300"
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-primary-400 hover:text-primary-300 transition-colors font-semibold"
              >
                Start your free trial →
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Professional EMS education platform trusted by 2,800+ providers
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}