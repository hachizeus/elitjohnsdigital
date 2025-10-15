import { useState, useEffect } from 'react'
import { supabase, Project } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Upload, X, Plus } from 'lucide-react'
import { uploadToImageKit } from '@/utils/imagekit'

interface ProjectFormProps {
  project?: Project | null
  onSuccess: () => void
  onCancel: () => void
}

const ProjectForm = ({ project, onSuccess, onCancel }: ProjectFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'website',
    client_name: '',
    project_url: '',
    github_url: '',
    technologies: '',
    features: '',
    price_range: '',
    completion_date: '',
    is_featured: false,
    status: 'published' as 'draft' | 'published' | 'archived'
  })
  const [loading, setLoading] = useState(false)
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [newImageUrl, setNewImageUrl] = useState('')
  const [uploadingFiles, setUploadingFiles] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        category: project.category || 'website',
        client_name: project.client_name || '',
        project_url: project.project_url || '',
        github_url: project.github_url || '',
        technologies: Array.isArray(project.technologies) ? project.technologies.join(', ') : '',
        features: Array.isArray(project.features) ? project.features.join(', ') : '',
        price_range: project.price_range || '',
        completion_date: project.completion_date || '',
        is_featured: project.is_featured || false,
        status: project.status || 'published'
      })
      
      if (project.images) {
        setImageUrls(project.images.map(img => img.image_url))
      }
    }
  }, [project])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const projectData = {
      ...formData,
      completion_date: formData.completion_date || null,
      technologies: formData.technologies ? formData.technologies.split(',').map(t => t.trim()).filter(Boolean) : [],
      features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(Boolean) : []
    }

    try {
      let projectId = project?.id

      if (project) {
        // Update existing project
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', project.id)

        if (error) throw error
      } else {
        // Create new project
        const { data, error } = await supabase
          .from('projects')
          .insert([projectData])
          .select()
          .single()

        if (error) throw error
        projectId = data.id
      }

      // Handle images
      if (projectId && imageUrls.length > 0) {
        // Delete existing images if updating
        if (project) {
          await supabase
            .from('project_images')
            .delete()
            .eq('project_id', projectId)
        }

        // Insert new images
        const imageData = imageUrls.map((url, index) => ({
          project_id: projectId,
          image_url: url,
          is_primary: index === 0,
          display_order: index
        }))

        const { error: imageError } = await supabase
          .from('project_images')
          .insert(imageData)

        if (imageError) throw imageError
      }

      onSuccess()
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Error saving project. Please try again.')
    }
    setLoading(false)
  }

  const addImageUrl = () => {
    if (newImageUrl.trim()) {
      setImageUrls([...imageUrls, newImageUrl.trim()])
      setNewImageUrl('')
    }
  }



  const handleFileUpload = async (files: FileList) => {
    setUploadingFiles(true)
    const uploadedUrls: string[] = []

    for (const file of Array.from(files)) {
      if (file.type.startsWith('image/')) {
        // Check file size limit (20MB for images)
        const maxSize = 20 * 1024 * 1024
        if (file.size > maxSize) {
          alert(`${file.name} is too large. Max size: 20MB`)
          continue
        }
        
        try {
          setUploadProgress(prev => ({ ...prev, [file.name]: 0 }))
          
          // Upload to ImageKit
          const result = await uploadToImageKit(file, 'portfolio')
          uploadedUrls.push(result.url)
          
          setUploadProgress(prev => ({ ...prev, [file.name]: 100 }))
          
        } catch (err: any) {
          console.error('Upload error:', err)
          alert(`Failed to upload ${file.name}: ${err.message}`)
        }
      } else {
        alert(`${file.name} is not a supported file type. Only images allowed.`)
      }
    }

    setImageUrls([...imageUrls, ...uploadedUrls])
    setUploadingFiles(false)
    setUploadProgress({})
  }

  const uploadWithProgress = async (fileName: string, file: File, originalName: string) => {
    return new Promise<void>((resolve, reject) => {
      const chunkSize = 1024 * 1024 // 1MB chunks
      const totalChunks = Math.ceil(file.size / chunkSize)
      let uploadedChunks = 0

      // Simulate chunked upload with progress
      const uploadChunk = async () => {
        if (uploadedChunks < totalChunks) {
          const progress = Math.round((uploadedChunks / totalChunks) * 100)
          setUploadProgress(prev => ({ ...prev, [originalName]: progress }))
          
          // Simulate chunk upload delay
          await new Promise(resolve => setTimeout(resolve, 100))
          uploadedChunks++
          
          requestAnimationFrame(uploadChunk)
        } else {
          // Final upload
          supabase.storage
            .from('project-media')
            .upload(fileName, file, {
              cacheControl: '3600',
              upsert: false
            })
            .then(({ error }) => {
              if (error) {
                reject(error)
              } else {
                setUploadProgress(prev => ({ ...prev, [originalName]: 100 }))
                resolve()
              }
            })
        }
      }
      
      uploadChunk()
    })
  }

  const removeImage = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index))
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border">
      <h2 className="text-2xl font-bold mb-6">
        {project ? 'Edit Project' : 'Add New Project'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Project Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          
          <select
            className="px-3 py-2 border rounded-md bg-white"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="website">Website</option>
            <option value="app">Mobile App</option>
            <option value="branding">Branding</option>
            <option value="social">Social Media</option>
          </select>
        </div>

        <Textarea
          placeholder="Project Description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          rows={4}
          required
        />

        {/* Client & URLs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Client Name"
            value={formData.client_name}
            onChange={(e) => setFormData({...formData, client_name: e.target.value})}
          />
          
          <Input
            placeholder="Project URL"
            type="url"
            value={formData.project_url}
            onChange={(e) => setFormData({...formData, project_url: e.target.value})}
          />
        </div>

        <Input
          placeholder="GitHub URL (optional)"
          type="url"
          value={formData.github_url}
          onChange={(e) => setFormData({...formData, github_url: e.target.value})}
        />

        {/* Technologies & Features */}
        <Input
          placeholder="Technologies (comma separated: React, Node.js, MongoDB)"
          value={formData.technologies}
          onChange={(e) => setFormData({...formData, technologies: e.target.value})}
        />

        <Input
          placeholder="Features (comma separated: Responsive Design, E-commerce)"
          value={formData.features}
          onChange={(e) => setFormData({...formData, features: e.target.value})}
        />

        {/* Price & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Price Range (e.g., KES 50,000 - 100,000)"
            value={formData.price_range}
            onChange={(e) => setFormData({...formData, price_range: e.target.value})}
          />
          
          <Input
            type="date"
            placeholder="Completion Date"
            value={formData.completion_date}
            onChange={(e) => setFormData({...formData, completion_date: e.target.value})}
          />
        </div>

        {/* Images & Videos */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Project Media (Images & Videos)</label>
          
          {/* URL Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Image or Video URL"
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              className="flex-1"
            />
            <Button type="button" onClick={addImageUrl} variant="outline">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* File Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
              disabled={uploadingFiles}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600">
                {uploadingFiles ? 'Uploading...' : 'Click to upload images or videos'}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Max: 20MB images (auto-optimized via ImageKit)
              </p>
              
              {/* Progress indicators */}
              {Object.entries(uploadProgress).map(([fileName, progress]) => (
                <div key={fileName} className="mt-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{fileName}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div 
                      className="bg-primary h-1.5 rounded-full transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </label>
          </div>

          {imageUrls.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {imageUrls.map((url, index) => {
                const isVideo = url.includes('.mp4') || url.includes('.webm') || url.includes('video');
                return (
                  <div key={index} className="relative group">
                    {isVideo ? (
                      <video 
                        src={url} 
                        className="w-full h-24 object-cover rounded border"
                        controls={false}
                        muted
                      />
                    ) : (
                      <img 
                        src={url} 
                        alt={`Project media ${index + 1}`}
                        className="w-full h-24 object-cover rounded border"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    {index === 0 && (
                      <span className="absolute bottom-1 left-1 bg-blue-500 text-white text-xs px-1 rounded">
                        Primary
                      </span>
                    )}
                    {isVideo && (
                      <span className="absolute top-1 left-1 bg-green-500 text-white text-xs px-1 rounded">
                        Video
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.is_featured}
              onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
              className="rounded"
            />
            <span className="text-sm font-medium">Featured Project</span>
          </label>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Status:</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value as any})}
              className="px-2 py-1 border rounded text-sm"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <Button type="submit" disabled={loading} className="flex-1 sm:flex-none">
            {loading ? 'Saving...' : project ? 'Update Project' : 'Create Project'}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ProjectForm