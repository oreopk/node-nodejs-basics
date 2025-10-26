import fs from 'fs';
import path from 'path';

const rename = async () => {
    const __dirname = import.meta.dirname;
    const oldPath = path.join(__dirname, "files", 'wrongFilename.txt');
    const newPath = path.join(__dirname, "files", 'properFilename.md');
    if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
        throw new Error('FS operation failed');
    }
     fs.renameSync(oldPath, newPath);
};

await rename();
