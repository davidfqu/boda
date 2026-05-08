import sharp from 'sharp';
import { readdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const assetsDir = new URL('../src/assets', import.meta.url).pathname;
const exts = ['.png', '.jpg', '.jpeg'];

const files = readdirSync(assetsDir).filter(f => exts.includes(extname(f).toLowerCase()));

for (const file of files) {
  const input = join(assetsDir, file);
  const output = join(assetsDir, basename(file, extname(file)) + '.webp');
  if (existsSync(output)) {
    console.log(`skip (exists): ${file}`);
    continue;
  }
  const info = await sharp(input).webp({ quality: 82 }).toFile(output);
  const orig = (await import('fs')).statSync(input).size;
  const saved = Math.round((1 - info.size / orig) * 100);
  console.log(`${file} → .webp  (${saved}% smaller)`);
}
