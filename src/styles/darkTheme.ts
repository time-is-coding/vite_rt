import { ThemeConfig, theme } from 'antd';
import defaultStyle from './defaultStyle';
const { token, components } = defaultStyle;
export default {
  algorithm: theme.defaultAlgorithm,
  token: {
    ...token,
    fontFamily: 'PingFangSC, 微软雅黑, Helvetic',
    colorSuccess: '#15ad2c',
    colorPrimary: '#1d70f5',
    colorInfo: '#1d70f5',
    colorWarning: '#fa8015',
    colorError: '#d70016',
    colorText: '#fff',
    colorTextSecondary: '#fff',
    colorTextTertiary: '#fff',
    colorBorder: '#fff',
    colorBgContainer: 'black',
    colorBgBase: 'black',
    colorBgLayout: 'black',
  },
  components: {
    ...components,
    Layout: {
      ...components?.Layout,
      headerColor: '#fff',
      headerBg: 'rgb(4, 51, 107)',
      triggerBg: 'black',
      triggerColor: 'rgb(4, 51, 107)',
    },
  },
} as ThemeConfig;
