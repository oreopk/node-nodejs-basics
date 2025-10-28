const parseEnv = () => {
  const result = Object.entries(process.env)
        .filter(entry => entry[0].startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`);
    
    console.log(result);
};

parseEnv();
