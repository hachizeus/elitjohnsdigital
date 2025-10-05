-- Drop existing policies
DROP POLICY IF EXISTS "Public read published projects" ON projects;
DROP POLICY IF EXISTS "Admin full access projects" ON projects;
DROP POLICY IF EXISTS "Admin full access images" ON project_images;

-- Create new policies for public access
CREATE POLICY "Anyone can view published projects" ON projects
FOR SELECT USING (status = 'published');

CREATE POLICY "Anyone can view project images" ON project_images
FOR SELECT USING (
  project_id IN (
    SELECT id FROM projects WHERE status = 'published'
  )
);

-- Admin policies
CREATE POLICY "Admin can manage projects" ON projects
FOR ALL USING (auth.jwt() ->> 'email' = 'elitjohnsdigital@gmail.com');

CREATE POLICY "Admin can manage images" ON project_images
FOR ALL USING (auth.jwt() ->> 'email' = 'elitjohnsdigital@gmail.com');