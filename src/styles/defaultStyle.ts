import { ThemeConfig } from 'antd';

export default {
  token: {
    fontSizeHeading4: 18,
    fontSizeXL: 18,
    sizeStep: 5,
    sizeUnit: 4,
    borderRadius: 4,
    padding: 16,
    borderRadiusLG: 4,
  },
  components: {
    Layout: {
      headerHeight: 60,
      headerPadding: '0px 16px',
      footerPadding: '0',
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
