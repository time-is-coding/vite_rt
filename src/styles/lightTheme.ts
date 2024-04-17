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
    colorText: '#232111',
    colorTextSecondary: '#555555',
    colorTextTertiary: '#999999',
    colorBorder: '#e6e6e6',
    colorBgContainer: '#fff',
    colorBgBase: '#f6f6f6',
    colorBgLayout: '#e6e6e6',
  },
  components: {
    ...components,
    Layout: {
      ...components?.Layout,
      headerColor: '#fff',
      headerBg: 'rgb(4, 51, 107)',
      triggerBg: '#fff',
      triggerColor: 'rgb(4, 51, 107)',
    },
  },
} as ThemeConfig;
