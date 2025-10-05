import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Project = {
  id: string
  title: string
  description: string
  category: string
  client_name?: string
  project_url?: string
  github_url?: string
  technologies: string[]
  features: string[]
  price_range?: string
  completion_date?: string
  is_featured: boolean
  status: 'draft' | 'published' | 'archived'
  created_at: string
  updated_at: string
  images?: ProjectImage[]
}

export type ProjectImage = {
  id: string
  project_id: string
  image_url: string
  alt_text?: string
  is_primary: boolean
  display_order: number
}