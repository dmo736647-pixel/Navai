import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const indexPath = path.join(root, 'index.html');
const constantsPath = path.join(root, 'constants.ts');
const outDir = path.join(root, 'docs');

function readFile(p) {
  return fs.readFileSync(p, 'utf-8');
}

function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf-8');
}

function extractToolIds(source) {
  const start = source.indexOf('export const INITIAL_TOOLS');
  if (start === -1) return [];
  const end = source.indexOf('];', start);
  const slice = source.slice(start, end !== -1 ? end : undefined);
  const ids = new Set();
  const regex = /id:\s*'([^']+)'/g;
  let m;
  while ((m = regex.exec(slice)) !== null) {
    ids.add(m[1]);
  }
  return Array.from(ids);
}

function injectCanonical(html, canonicalHref) {
  // Replace or add canonical link
  const hasCanonical = html.includes('<link rel="canonical"');
  const canonicalTag = `<link rel="canonical" href="${canonicalHref}" />`;
  if (hasCanonical) {
    return html.replace(/<link rel="canonical"[^>]*>/, canonicalTag);
  }
  return html.replace('</head>', `  ${canonicalTag}\n</head>`);
}

function injectTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
}

function main() {
  const indexHtml = readFile(indexPath);
  const constantsSrc = readFile(constantsPath);
  const ids = extractToolIds(constantsSrc);

  if (!fs.existsSync(outDir)) {
    console.error('Output directory "docs" not found. Run "npm run build" first.');
    process.exit(1);
  }

  ids.forEach((id) => {
    const canonical = `https://navai.space/tool/${id}`;
    let html = injectCanonical(indexHtml, canonical);
    html = injectTitle(html, `NavAI - ${id} Details`);
    const target = path.join(outDir, 'tool', id, 'index.html');
    writeFile(target, html);
    console.log('Generated:', target);
  });
}

main();
