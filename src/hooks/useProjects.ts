import { useState, useEffect } from 'react'
import { supabase, Project } from '@/lib/supabase'

export const useProjects = (category?: string) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [category])

  const fetchProjects = async () => {
    setLoading(true)
    setError(null)

    try {
      let query = supabase
        .from('projects')
        .select(`
          id,
          title,
          description,
          category,
          project_url,
          is_featured,
          images:project_images!inner(image_url, is_primary)
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(12)

      if (category) {
        query = query.eq('category', category)
      }

      const { data, error: fetchError } = await query

      if (fetchError) {
        throw fetchError
      }

      setProjects(data || [])
    } catch (err: any) {
      console.error('Fetch error:', err)
      setError(err.message || 'Failed to fetch projects')
      setProjects([])
    }
    setLoading(false)
  }

  return { projects, loading, error, refetch: fetchProjects }
}