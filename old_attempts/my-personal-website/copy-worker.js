const fs = require('fs');
const path = require('path');

try {
  const sourcePath = path.join(
    path.dirname(require.resolve('pdfjs-dist/package.json')),
    'build/pdf.worker.min.js'
  );

  const publicDir = path.join(__dirname, 'public');
  const destPath = path.join(publicDir, 'pdf.worker.min.js');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  fs.copyFileSync(sourcePath, destPath);
  
  console.log('✅ PDF worker v3 copied successfully.');
} catch (error) {
  console.error('❌ Error copying PDF worker v3:', error);
  process.exit(1);
}