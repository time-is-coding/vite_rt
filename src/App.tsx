import { RootRouter } from '@/router';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import antTheme from './styles/antTheme';

function App() {
  return (
    <>
      <span className="iconfont" style={{ visibility: 'hidden', position: 'fixed', top: '-20px' }}>
        &#xe9bd;
      </span>
      <StyleProvider hashPriority="high">
        <BrowserRouter>
          <ConfigProvider theme={antTheme} locale={zh_CN}>
            <RootRouter />
          </ConfigProvider>
        </BrowserRouter>
      </StyleProvider>
    </>
  );
}

export default App;
