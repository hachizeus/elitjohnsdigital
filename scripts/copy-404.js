import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('Copied index.html to 404.html for SPA routing');
} else {
  console.error('index.html not found in dist folder');
}