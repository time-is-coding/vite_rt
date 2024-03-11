export default [
  {
    url: 'http://localhost:8000/openapi.json', //swagger WEB地址
    //swagger json 和 api.ts的输出文件地址
    output: '../src/apis', // .ts的文件名和，CLASS内api的名字
    name: 'myApi', // jsonUrlPath: "/schema/v3/api-docs"
  },
];
