export const initJson = JSON.stringify({
  name: 'dashboard',
  type: 'construction',
  framework: 'ant_design_v5',
  style: {
    token: {
      colorSuccess: '#15ad2c',
      colorPrimary: '#1d70f5',
      colorInfo: '#1d70f5',
      colorWarning: '#fa8015',
      colorError: '#d70016',
      fontFamily: 'PingFangSC, 微软雅黑, Helvetic',
      fontSizeHeading4: 18,
      fontSizeXL: 18,
      sizeStep: 5,
      sizeUnit: 4,
      borderRadius: 4,
      padding: 16,
      borderRadiusLG: 4,
      colorBorder: '#04336b',
      colorText: '#232111',
      colorTextDisabled: '#999',
      colorTextPlaceholder: '#999',
      colorBgContainerDisabled: '#666',
      colorBgBase: 'rgb(4, 51, 107)',
      colorTextSecondary: '#555',
      colorTextTertiary: '#999',
      colorBgContainer: '#fff',
      colorBgLayout: '#e6e6e6',
    },
    components: {
      Layout: {
        headerHeight: 60,
        headerPadding: '0px 16px',
        footerPadding: '0',
        headerBg: 'rgb(4, 51, 107)',
        triggerBg: '#fff',
        triggerColor: 'rgb(4, 51, 107)',
      },
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
        colorTextHeading: '#fff',
        fontWeightStrong: 400,
      },
      Divider: {
        colorSplit: '#fff',
      },
      Select: {
        selectorBg: '#00004d',
        colorText: '#fff',
        optionActiveBg: '#00004d',
        optionSelectedBg: '#00004d',
        optionSelectedColor: '#fff',
      },
      Input: {
        addonBg: '#00004d',
        colorBgContainer: '#00004d',
        colorText: '#fff',
        hoverBorderColor: '#04336b',
      },
      Button: {
        defaultBg: '#00004d',
        defaultColor: '#fff',
        colorText: '#fff',
        defaultActiveBg: '#00004d',
        colorIcon: '#fff',
        defaultHoverBg: '#00004d',
      },
      Dropdown: {
        colorText: '#fff',
      },
      Badge: {
        colorText: '#fff',
      },
    },
  },
  showComponents: [
    {
      system_components_name: 'BrandName',
      system_key: 'brandName',
      system_show: true,
    },
    {
      system_components_name: 'Avatar',
      system_key: 'avatar',
      system_show: true,
    },
    {
      system_components_name: 'Logo',
      system_key: 'logo',
      system_show: true,
    },
    {
      system_components_name: 'SiderBar',
      system_key: 'siderBar',
      system_show: true,
    },
    {
      system_components_name: 'Notice',
      system_key: 'notice',
      system_show: true,
    },
    {
      system_components_name: 'OtherInfo',
      system_key: 'otherInfo',
      system_show: true,
    },
    {
      system_components_name: 'SearchBar',
      system_key: 'search',
      system_show: true,
    },
    {
      system_components_name: 'NavBar',
      system_key: 'navbar',
      system_show: true,
    },
  ],
  // props: {
  //   brandName: '案例项目',
  //   logo: '',
  //   toolbar: {
  //     search: {
  //       name: 'search_input',
  //       type: 'input',
  //     },
  //     userinfo: {
  //       name: 'user_info',
  //       type: 'default',
  //       avator: './avator.png',
  //       value: '李小倩',
  //       display_text: true,
  //       dropdown: {
  //         logout: {
  //           name: 'logout',
  //         },
  //       },
  //     },
  //     notifications: {
  //       name: 'notify_btn',
  //       value: 3,
  //       type: 'default',
  //     },
  //     modes: {
  //       name: 'theme_btn',
  //       type: 'default',
  //     },
  //     langs: {
  //       name: 'lang_btn',
  //       type: 'default',
  //     },
  //   },
  //   navbar: {
  //     mode: 'select',
  //   },
  //   sidebar: [],
  // },
});
