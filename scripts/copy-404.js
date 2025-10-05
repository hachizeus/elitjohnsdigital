const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexFile = path.join(distDir, 'index.html');
const targetFile = path.join(distDir, '404.html');

if (!fs.existsSync(indexFile)) {
  console.error('index.html not found in dist. Make sure build ran successfully.');
  process.exit(1);
}

fs.copyFileSync(indexFile, targetFile);
console.log('Copied index.html to 404.html for SPA fallback (Render).');
