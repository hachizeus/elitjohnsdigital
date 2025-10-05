import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { LogOut, Home, FolderOpen, Settings } from 'lucide-react'
import logo from '@/assets/elitjohns-logo.png'

interface AdminLayoutProps {
  children: ReactNode
  onLogout: () => void
}

const AdminLayout = ({ children, onLogout }: AdminLayoutProps) => {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    onLogout()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Elitjohns Digital" className="h-8 w-8" />
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-primary">Elitjohns</span>
                <span className="text-lg font-bold text-gray-900">Admin</span>
              </div>
            </div>

            {/* Admin Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/admin" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </Link>
              <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <Home className="w-4 h-4" />
                <span>View Site</span>
              </Link>
            </nav>

            {/* Logout Button */}
            <Button onClick={handleLogout} variant="outline" size="sm" className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}

export default AdminLayout