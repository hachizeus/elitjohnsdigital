import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import AdminAuth from '@/components/AdminAuth'
import Admin from './Admin'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return <Admin onLogout={() => setIsAuthenticated(false)} />
}

export default AdminDashboard