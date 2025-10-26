import fs from 'fs';
import path from 'path';

const copy = async () => {
    const __dirname = import.meta.dirname;
    const sourseFiles = path.join(__dirname, "files");
    const sourseFiles_copy = path.join(__dirname, "files_copy");
    if (!fs.existsSync(sourseFiles) || fs.existsSync(sourseFiles_copy)) {
        throw new Error('FS operation failed');
    }
    fs.mkdirSync(sourseFiles_copy);
    fs.readdirSync(sourseFiles).map(file => {
        const sourcePath = path.join(sourseFiles, file);
        const targetPath = path.join(sourseFiles_copy, file);
        fs.copyFileSync(sourcePath, targetPath);
    })
};

await copy();
