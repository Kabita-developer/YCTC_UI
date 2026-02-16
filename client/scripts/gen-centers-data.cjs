/**
 * Generates client/public/centers.json from centers TSV.
 * Usage: node client/scripts/gen-centers-data.cjs [centers.tsv]
 */
const fs = require('fs');
const path = require('path');

function parseTsv(text) {
  return text
    .trim()
    .split(/\r?\n/)
    .map((line) => {
      const p = line.split('\t');
      return {
        code: (p[0] || '').trim(),
        name: (p[1] || '').trim(),
        director: (p[2] || '').trim(),
        address: (p[3] || '').trim(),
        district: (p[4] || '').trim(),
        state: (p[5] || '').trim(),
        courses: (p[6] || 'All Type Of Computer Courses').trim(),
      };
    });
}

function run(input) {
  const centers = parseTsv(input);
  const outPath = path.join(__dirname, '..', 'public', 'centers.json');
  fs.writeFileSync(outPath, JSON.stringify(centers), 'utf8');
  console.log('Wrote', centers.length, 'centers to', outPath);
}

const file = process.argv[2];
if (file) {
  const fullPath = path.isAbsolute(file) ? file : path.join(process.cwd(), file);
  run(fs.readFileSync(fullPath, 'utf8'));
} else {
  let input = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => { input += chunk; });
  process.stdin.on('end', () => run(input));
}
