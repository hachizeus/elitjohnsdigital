-- Clear all sample data from projects and images
DELETE FROM project_images;
DELETE FROM projects;

-- Reset sequences if needed
-- This ensures clean slate for your real projects