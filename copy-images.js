const fs = require('fs');
const path = require('path');

const files = [
  {
    src: 'C:/Users/Sanket Pathare/.gemini/antigravity-ide/brain/815dec9f-64ed-4d1a-b332-72daa1858d69/web_dev_illustration_1781625890041.png',
    dest: 'd:/Development/layernlooms/public/web-dev.png'
  },
  {
    src: 'C:/Users/Sanket Pathare/.gemini/antigravity-ide/brain/815dec9f-64ed-4d1a-b332-72daa1858d69/mobile_dev_illustration_1781625909175.png',
    dest: 'd:/Development/layernlooms/public/mobile-app.png'
  },
  {
    src: 'C:/Users/Sanket Pathare/.gemini/antigravity-ide/brain/815dec9f-64ed-4d1a-b332-72daa1858d69/ai_ml_illustration_1781625925411.png',
    dest: 'd:/Development/layernlooms/public/ai-ml.png'
  },
  {
    src: 'C:/Users/Sanket Pathare/.gemini/antigravity-ide/brain/815dec9f-64ed-4d1a-b332-72daa1858d69/cloud_infra_illustration_1781625948139.png',
    dest: 'd:/Development/layernlooms/public/cloud-infra.png'
  },
  {
    src: 'C:/Users/Sanket Pathare/.gemini/antigravity-ide/brain/815dec9f-64ed-4d1a-b332-72daa1858d69/data_eng_illustration_1781625963913.png',
    dest: 'd:/Development/layernlooms/public/data-eng.png'
  },
  {
    src: 'C:/Users/Sanket Pathare/.gemini/antigravity-ide/brain/815dec9f-64ed-4d1a-b332-72daa1858d69/cybersecurity_illustration_1781625982917.png',
    dest: 'd:/Development/layernlooms/public/cybersecurity.png'
  }
];

files.forEach(file => {
  try {
    fs.copyFileSync(file.src, file.dest);
    console.log(`Successfully copied ${path.basename(file.src)} -> ${path.basename(file.dest)}`);
  } catch (err) {
    console.error(`Error copying ${path.basename(file.src)}:`, err.message);
  }
});
