import { ThemeConfig, theme } from 'antd';

export default {
  algorithm: theme.defaultAlgorithm,
  token: {
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
    fontSizeHeading4: 18,
    fontSizeXL: 18,
    sizeStep: 5,
    sizeUnit: 4,
    borderRadius: 4,
    padding: 16,
    borderRadiusLG: 4,
  },
  components: {
    Typography: {
      fontFamilyCode: "'PingFangSC',Aral,Helvetica",
      marginXS: 0,
      marginXXS: 0,
      paddingSM: 0,
      titleMarginBottom: '0',
      titleMarginTop: '0',
    },
    Layout: {
      headerColor: '#fff',
      headerBg: 'rgb(4, 51, 107)',
      headerHeight: 60,
      headerPadding: '0px 16px',
      footerPadding: '0',
      triggerBg: '#fff',
      triggerColor: 'rgb(4, 51, 107)',
    },
    Checkbox: {
      controlInteractiveSize: 14,
      fontSize: 14,
    },
    Radio: {
      radioSize: 14,
    },
    Tabs: {
      titleFontSize: 16,
    },
  },
} as ThemeConfig;
