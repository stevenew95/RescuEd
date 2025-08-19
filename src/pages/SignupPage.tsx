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
  User,
  Shield,
  Clock,
  Zap
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    certificationLevel: '',
    agencyName: '',
    agreeToTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const certificationLevels = [
    'EMT-Basic',
    'AEMT', 
    'EMTI',
    'EMTP',
    'CCPC/FPC',
    'Student',
    'Other'
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email'
    if (!formData.username.trim()) newErrors.username = 'Username is required'
    if (formData.username.length < 3) newErrors.username = 'Username must be at least 3 characters'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    if (!formData.certificationLevel) newErrors.certificationLevel = 'Please select your certification level'
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    // TODO: Implement Supabase auth
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Signup attempt:', formData)
      // Redirect to onboarding/dashboard on success
    } catch (err) {
      setErrors({ general: 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
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
                Rescu<span className="text-green-200">Ed</span>
              </span>
            </div>

            <h1 className="text-5xl font-black leading-tight mb-6">
              Start Your{' '}
              <span className="block text-green-200">
                Free Trial Today
              </span>
            </h1>
            
            <p className="text-xl text-green-100 leading-relaxed mb-12">
              Experience professional EMS education with full platform access. 
              No credit card required.
            </p>

            {/* Trial Benefits */}
            <div className="space-y-6">
              {[
                { icon: Clock, text: '14 days full access', color: 'text-green-400' },
                { icon: Shield, text: 'No credit card required', color: 'text-blue-400' },
                { icon: Zap, text: 'Cancel anytime', color: 'text-purple-400' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div className={`w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <span className="text-green-100 font-semibold">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black text-white">2,800+</div>
                  <div className="text-green-200 text-sm">Providers</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">98%</div>
                  <div className="text-green-200 text-sm">Improvement</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">4.9★</div>
                  <div className="text-green-200 text-sm">Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-8">
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white">
              Rescu<span className="text-primary-400">Ed</span>
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">Start Your Free Trial</h2>
            <p className="text-gray-400">
              Get 14 days of full access to professional EMS education
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.firstName ? 'border-red-500' : 'border-white/10 focus:border-primary-500'
                  }`}
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.lastName ? 'border-red-500' : 'border-white/10 focus:border-primary-500'
                  }`}
                  placeholder="Last name"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="block text-gray-300 font-semibold mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                    errors.username ? 'border-red-500' : 'border-white/10 focus:border-primary-500'
                  }`}
                  placeholder="Choose a username"
                />
              </div>
              {errors.username && (
                <p className="text-red-400 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Password Fields */}
            <div className="grid md:grid-cols-2 gap-4">
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
                    className={`w-full bg-white/5 border rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.password ? 'border-red-500' : 'border-white/10 focus:border-primary-500'
                    }`}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full bg-white/5 border rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.confirmPassword ? 'border-red-500' : 'border-white/10 focus:border-primary-500'
                    }`}
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Professional Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Certification Level
                </label>
                <select
                  value={formData.certificationLevel}
                  onChange={(e) => handleInputChange('certificationLevel', e.target.value)}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-4 text-white focus:outline-none transition-colors ${
                    errors.certificationLevel ? 'border-red-500' : 'border-white/10 focus:border-primary-500'
                  }`}
                >
                  <option value="" className="bg-gray-800">Select your level</option>
                  {certificationLevels.map(level => (
                    <option key={level} value={level} className="bg-gray-800">{level}</option>
                  ))}
                </select>
                {errors.certificationLevel && (
                  <p className="text-red-400 text-sm mt-1">{errors.certificationLevel}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Agency/Organization <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.agencyName}
                  onChange={(e) => handleInputChange('agencyName', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Your agency or department"
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                  className={`w-5 h-5 text-primary-500 bg-white/5 border rounded focus:ring-primary-500 focus:ring-2 mt-0.5 ${
                    errors.agreeToTerms ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                <span className="text-gray-400 text-sm leading-relaxed">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary-400 hover:text-primary-300">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary-400 hover:text-primary-300">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="text-red-400 text-sm mt-1">{errors.agreeToTerms}</p>
              )}
            </div>

            {/* General Error */}
            {errors.general && (
              <motion.div
                className="flex items-center gap-3 bg-red-500/20 border border-red-500/30 rounded-xl p-4 text-red-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{errors.general}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300"
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating Your Account...
                </>
              ) : (
                <>
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Trial Details */}
          <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              What's Included in Your Free Trial
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Full access to all courses
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Interactive case studies
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Professional video content
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Expert podcast series
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                CE tracking & certificates
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Community discussions
              </div>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary-400 hover:text-primary-300 transition-colors font-semibold"
              >
                Sign in →
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Join 2,800+ EMS providers who trust RescuEd for professional education
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}