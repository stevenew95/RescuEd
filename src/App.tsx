import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import Layout from './components/Layout'
import AuthenticatedLayout from './components/layout/AuthenticatedLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import DemoPage from './pages/DemoPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import './index.css'

function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={
        <Layout>
          <HomePage />
        </Layout>
      } />
      <Route path="/about" element={
        <Layout>
          <AboutPage />
        </Layout>
      } />
      <Route path="/pricing" element={
        <Layout>
          <PricingPage />
        </Layout>
      } />
      <Route path="/demo" element={
        <Layout>
          <DemoPage />
        </Layout>
      } />
      
      {/* Auth routes - redirect if already logged in */}
      <Route path="/login" element={
        user ? <Navigate to="/dashboard" replace /> : <LoginPage />
      } />
      <Route path="/signup" element={
        user ? <Navigate to="/dashboard" replace /> : <SignupPage />
      } />
      
      {/* Protected routes - redirect if not logged in */}
      <Route path="/dashboard" element={
        user ? (
          <AuthenticatedLayout>
            <DashboardPage />
          </AuthenticatedLayout>
        ) : (
          <Navigate to="/login" replace />
        )
      } />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  )
}

export default App