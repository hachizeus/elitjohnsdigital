import { useState, useEffect } from 'react'
import { supabase, Project } from '@/lib/supabase'
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ProjectForm from '@/components/ProjectForm'
import AdminLayout from '@/components/AdminLayout'

interface AdminProps {
  onLogout: () => void
}

const Admin = ({ onLogout }: AdminProps) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    filterProjects()
  }, [projects, searchTerm, categoryFilter])

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        images:project_images(*)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects:', error)
    } else {
      setProjects(data || [])
    }
    setLoading(false)
  }

  const filterProjects = () => {
    let filtered = projects

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(project => project.category === categoryFilter)
    }

    setFilteredProjects(filtered)
  }

  const deleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting project:', error)
    } else {
      fetchProjects()
    }
  }

  const toggleFeatured = async (project: Project) => {
    const { error } = await supabase
      .from('projects')
      .update({ is_featured: !project.is_featured })
      .eq('id', project.id)

    if (error) {
      console.error('Error updating project:', error)
    } else {
      fetchProjects()
    }
  }

  if (loading) return (
    <AdminLayout onLogout={onLogout}>
      <div className="text-center py-12">Loading...</div>
    </AdminLayout>
  )

  if (showForm || editingProject) {
    return (
      <AdminLayout onLogout={onLogout}>
        <div className="max-w-4xl mx-auto">
          <ProjectForm 
            project={editingProject}
            onSuccess={() => {
              setShowForm(false)
              setEditingProject(null)
              fetchProjects()
            }}
            onCancel={() => {
              setShowForm(false)
              setEditingProject(null)
            }}
          />
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout onLogout={onLogout}>
      <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Admin</h1>
            <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Project
            </Button>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md bg-white"
                >
                  <option value="all">All Categories</option>
                  <option value="website">Websites</option>
                  <option value="app">Mobile Apps</option>
                  <option value="branding">Branding</option>
                  <option value="social">Social Media</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-green-600">{projects.filter(p => p.status === 'published').length}</div>
              <div className="text-sm text-gray-600">Published</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-yellow-600">{projects.filter(p => p.status === 'draft').length}</div>
              <div className="text-sm text-gray-600">Drafts</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="text-2xl font-bold text-blue-600">{projects.filter(p => p.is_featured).length}</div>
              <div className="text-sm text-gray-600">Featured</div>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-4">
            {filteredProjects.length === 0 ? (
              <div className="bg-white p-12 rounded-lg border text-center">
                <div className="text-gray-500 mb-4">No projects found</div>
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Project
                </Button>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                    {/* Project Media Preview */}
                    {project.images && project.images.length > 0 && (
                      <div className="w-full lg:w-48 flex-shrink-0">
                        {(() => {
                          const primaryMedia = project.images.find(img => img.is_primary)?.image_url || project.images[0]?.image_url;
                          const isVideo = primaryMedia?.includes('.mp4') || primaryMedia?.includes('.webm') || primaryMedia?.includes('video');
                          
                          return isVideo ? (
                            <video 
                              src={primaryMedia}
                              className="w-full h-32 lg:h-24 object-cover rounded-lg border"
                              controls
                              muted
                            />
                          ) : (
                            <img 
                              src={primaryMedia}
                              alt={project.title}
                              className="w-full h-32 lg:h-24 object-cover rounded-lg border"
                            />
                          );
                        })()}
                        {project.images.length > 1 && (
                          <p className="text-xs text-gray-500 mt-1 text-center">
                            +{project.images.length - 1} more media
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        {project.is_featured && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                            Featured
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          project.status === 'published' ? 'bg-green-100 text-green-800' :
                          project.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="capitalize">Category: {project.category}</span>
                        {project.client_name && <span>Client: {project.client_name}</span>}
                        {project.completion_date && <span>Completed: {new Date(project.completion_date).toLocaleDateString()}</span>}
                      </div>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.technologies.slice(0, 5).map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              +{project.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-row lg:flex-col gap-2">
                      {project.project_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                            <Eye className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingProject(project)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant={project.is_featured ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleFeatured(project)}
                        className={project.is_featured ? "bg-yellow-500 hover:bg-yellow-600" : ""}
                      >
                        ⭐
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
      </div>
    </AdminLayout>
  )
}

export default Admin