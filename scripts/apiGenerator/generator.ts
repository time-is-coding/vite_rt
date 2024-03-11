import fs from 'fs';
import path from 'path';
import { generateApi } from 'swagger-typescript-api';

async function generateApiFiles(url: string, outputPath: string, name: string) {
  try {
    const { files } = await generateApi({
      name: `${name}.ts`,
      output: path.resolve(outputPath),
      // url: url,
      // url与input二选一即可
      input: path.resolve(url),
      httpClientType: 'axios',
      singleHttpClient: true,
      generateResponses: true,
      unwrapResponseData: false,
      prettier: {
        printWidth: 120,
        tabWidth: 2,
        trailingComma: 'all',
        parser: 'typescript',
      },
      defaultResponseType: 'void',
      // moduleNameFirstTag: true,  // 使每个tag成为一个模块
      modular: true,
      // templates: path.resolve(__dirname, './templates'),
      hooks: {
        onCreateRoute: (routeData) => {
          // console.log('onCreateRoute', routeData)
          routeData.namespace = name;
          return routeData;
        },
      },
    });
    files.forEach(({ fileContent, fileName }: any, index: number) => {
      if (fileName) {
        const filePath = path.join(outputPath, fileName + '.ts');
        fs.writeFileSync(filePath as string, fileContent as Buffer);
      } else {
        const filePath = path.join(outputPath, 'undefined' + index + '.ts');
        fs.writeFileSync(filePath as string, fileContent as Buffer);
      }
    });
  } catch (e) {
    console.error(e);
  }
}

export default generateApiFiles;
