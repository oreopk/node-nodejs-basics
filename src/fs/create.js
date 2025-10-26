import fs from 'fs';
const create = async () => {
  // const filePath = path.join('src/fs/files', 'fresh.txt');
  const filePath = './src/fs/files/fresh.txt';
  if (fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
  }
  fs.writeFileSync(filePath, 'I am fresh and young');
};

await create();
