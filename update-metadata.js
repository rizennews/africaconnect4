const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/app/[lang]');

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find export const metadata: Metadata = { ... };
  const metadataRegex = /export const metadata:\s*Metadata\s*=\s*\{([\s\S]*?)\n\};/;
  const match = content.match(metadataRegex);
  
  if (match) {
    const innerContent = match[1];
    
    // Extract canonical path if it exists
    const canonicalMatch = innerContent.match(/canonical:\s*['"]([^'"]+)['"]/);
    const canonicalPath = canonicalMatch ? canonicalMatch[1] : '';
    
    if (canonicalPath) {
      // Create the dynamic generateMetadata function
      const newMetadata = `export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {${innerContent.replace(/alternates:\s*\{[\s\S]*?\},?/, '')}
  alternates: {
    canonical: \`/\${lang}${canonicalPath === '/' ? '' : canonicalPath}\`,
    languages: {
      en: \`/en${canonicalPath === '/' ? '' : canonicalPath}\`,
      fr: \`/fr${canonicalPath === '/' ? '' : canonicalPath}\`,
      pt: \`/pt${canonicalPath === '/' ? '' : canonicalPath}\`,
    },
  },
  };
}`;
      
      content = content.replace(metadataRegex, newMetadata);
      fs.writeFileSync(file, content);
      console.log(`Updated metadata in ${file}`);
    }
  }
});
