import fs from 'fs/promises';
import path from 'path';

export async function getEntry(folder, date) {
  try {
    const filePath = path.resolve(`./src/content/${folder}/${date}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (err) {
    console.warn(`Could not find ${folder}/${date}.md`, err);
    return `<em>No ${folder.replace('-', ' ')} entry for ${date}</em>`;
  }
}
