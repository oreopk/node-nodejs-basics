import fs from 'fs';
import path from 'path';

const list = async () => {
    const __dirname = import.meta.dirname;
    const Path = path.join(__dirname, "files");
    
    if (!fs.existsSync(Path)) {
        throw new Error('FS operation failed');
    }
    
    console.log(fs.readdirSync(Path));
};

await list();
