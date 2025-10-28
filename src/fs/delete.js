import fs from 'fs';
import path from 'path';

const remove = async () => {
    const __dirname = import.meta.dirname;
    const filePath = path.join(__dirname, "files", 'fileToRemove.txt');
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }
    fs.unlinkSync(filePath);
};

await remove();
