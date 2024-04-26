import { RootRouter } from '@/router';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import darkTheme from './styles/darkTheme';
import lightTheme from './styles/lightTheme';

const theme = {
  dark: darkTheme,
  light: lightTheme,
};

function App() {
  return (
    <>
      {/* <StyleProvider hashPriority="high"> */}
      <BrowserRouter>
        <ConfigProvider theme={theme.light} locale={zh_CN}>
          <RootRouter />
        </ConfigProvider>
      </BrowserRouter>
      {/* </StyleProvider> */}
    </>
  );
}

export default App;
