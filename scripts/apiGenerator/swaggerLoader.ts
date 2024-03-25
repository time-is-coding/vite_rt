import axios from 'axios';
import fs from 'fs';
import path from 'path';
import generateApiFiles from './generator';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface JsonConfig {
  baseUrl?: string;
  jsonUrlPath?: string;
  output?: string;
  name?: string;
  url?: string;
}

// json文件请求
async function downloadJson(url: string) {
  // const url = `${BASEURL}${URLPATH}`;
  try {
    console.log(url);
    const response = await axios.get(url);
    if (response.status === 200) {
      return response;
    } else {
      console.error(`Failed to download file: status code ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`Failed to download file: ${error}`);
    return false;
  }
}

// json文件保存到对应文件夹
function saveFile(jsonData: any, output: string, name: string) {
  const directoryPath = path.resolve(__dirname, '..', output);

  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const filepath = path.resolve(directoryPath, `${name}.json`);
  fs.writeFileSync(filepath, JSON.stringify(jsonData, null, 2));

  console.log(`File is downloaded to ${filepath}`);

  generateApiFiles(filepath, directoryPath, name)
    .then(() => {
      console.log('API generated successfully.');
    })
    .catch((error) => {
      console.error(`Failed to generate API: ${error}`);
    });
}

// 读取config文件并批量下载文件进行保存
function bulkDownload(configArray: JsonConfig[]) {
  configArray.forEach(async (config: JsonConfig) => {
    const { url, name, output } = config;
    const response = await downloadJson(url);

    response && saveFile(response.data, output, name);
  });
}

// function batchProduction(configArray: JsonConfig[]) {
//   configArray.forEach(async (config: JsonConfig) => {
//     const { url, name, output } = config;
//     generateApiFiles(url, output, name);
//   });
// }

export default bulkDownload;
