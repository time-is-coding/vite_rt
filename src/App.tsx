import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from '@/router';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { StyleProvider } from '@ant-design/cssinjs';

function App() {
  return (
    <>
      <span
        className="iconfont"
        style={{ visibility: 'hidden', position: 'fixed', top: '-20px' }}
      >
        &#xe9bd;
      </span>
      <StyleProvider hashPriority="high">
        <BrowserRouter>
          <ConfigProvider locale={zh_CN}>
            <RootRouter />
          </ConfigProvider>
        </BrowserRouter>
      </StyleProvider>
    </>
  );
}

export default App;
