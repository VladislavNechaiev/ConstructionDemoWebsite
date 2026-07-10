const fs = require('fs');
const path = require('path');

const replacements = {
  'bg-luxury-black': 'bg-white',
  'bg-luxury-charcoal': 'bg-slate-50',
  'text-luxury-light': 'text-slate-600',
  'text-luxury-gold': 'text-teal-600',
  'bg-luxury-gold': 'bg-teal-600',
  'text-luxury-black': 'text-white',
  'border-luxury-gold': 'border-teal-500',
  'border-luxury-charcoal': 'border-slate-200',
  'border-white/5': 'border-slate-200',
  'border-white/10': 'border-slate-200',
  'bg-white/5': 'bg-slate-100',
  'text-gray-300': 'text-slate-600',
  'text-gray-400': 'text-slate-500',
  'text-white': 'text-slate-900', // mostly headers
  'bg-[#050505]': 'bg-white',
  'text-gray-900 dark:text-white': 'text-slate-900',
  'from-luxury-black': 'from-white',
  'via-luxury-black': 'via-white',
  'to-luxury-black': 'to-white',
  'shadow-[0_0_20px_rgba(212,175,55,0.3)]': 'shadow-lg shadow-teal-500/30',
  'shadow-[0_0_50px_rgba(212,175,55,0.1)]': 'shadow-xl',
  'shadow-[0_0_40px_rgba(0,0,0,0.5)]': 'shadow-2xl',
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('c:/Users/USER/Downloads/github/ConstructionDemoWebsite-main/ConstructionDemoWebsite-main/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  for (const [key, value] of Object.entries(replacements)) {
    if (content.includes(key)) {
      content = content.split(key).join(value);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
