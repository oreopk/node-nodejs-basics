import fs from 'fs';
import path from 'path';

const read = async () => {
    const __dirname = import.meta.dirname;
    const filePath = path.join(__dirname, "files", 'fileToRead.txt');
    
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }
    
    console.log(fs.readFileSync(filePath, 'utf8'));
};

await read();