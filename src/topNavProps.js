export const topNavIdentityProps = {
  href: '#',
  title: 'Приложение Юли',
  logo: {
    src: '/russia-flag-icon.png',
    alt: 'Флаг России',
  }
};

export const topNavUtilitiesProps = [
  // {
  //   type: 'button',
  //   text: 'Docs',
  //   // Документация приложения
  //   href: 'https://github.com/mrrobotisreal',
  //   external: true,
  //   externalIconAriaLabel: ' (opens in a new tab)',
  // },
  // {
  //   type: 'menu-dropdown',
  //   text: 'Languages',
  //   description: 'Choose your language',
  //   // iconName: '',
  //   title: 'Languages',
  //   ariaLabel: 'Languages',
  //   items: [
  //     {
  //       id: 'en',
  //       text: 'English',
  //       href: '#',
  //     },
  //     {
  //       id: 'ru',
  //       text: 'Russian',
  //       href: '#',
  //     },
  //     {
  //       id: 'vi',
  //       text: 'Vietnamese',
  //       href: '#',
  //     },
  //     {
  //       id: 'zh',
  //       text: 'Chinese (CN)',
  //       href: '#',
  //     },
  //     {
  //       id: 'zh-TW',
  //       text: 'Chinese (TW)',
  //       href: '#',
  //     },
  //   ]
  // },
  {
    type: 'button',
    iconName: 'notification',
    title: 'Уведомления',
    ariaLabel: 'Notifications (unread)',
    badge: true,
    disableUtilityCollapse: false,
  },
  {
    type: 'menu-dropdown',
    iconName: 'settings',
    title: 'Настройки',
    ariaLabel: 'Settings',
    items: [
      {
        id: 'settings-profile',
        text: 'Настройки профиля',
        href: '#',
      },
      {
        id: 'settings-theme',
        text: 'Настройки темы',
        href: '#',
      },
    ]
  },
  {
    type: 'menu-dropdown',
    text: 'Mitchell Wintrow',
    description: '90mitchwintrow@gmail.com',
    iconName: 'user-profile',
    items: [
      {
        id: 'profile',
        text: 'Профиль'
      },
      {
        id: 'preferences',
        text: 'Настройки'
      },
      {
        id: 'security',
        text: 'Безопасность'
      },
      {
        id: 'support-group',
        text: 'Группа поддержки',
        items: [
          {
            id: 'documentation',
            text: 'Документация',
            href: '#',
            external: true,
            externalIconAriaLabel: ' (opens in a new tab)',
          },
          {
            id: 'support',
            text: 'Поддерживать'
          },
          {
            id: 'feedback',
            text: 'Обратная связь',
            href: '#',
            external: true,
            externalIconAriaLabel: ' (opens in a new tab)',
          }
        ]
      },
      {
        id: 'signout',
        text: 'Выход'
      }
    ]
  }
];

export const topNavi18nStringsProps = {
  searchIconAriaLabel: 'Search',
  searchDismissIconAriaLabel: 'Close search',
  overflowMenuTriggerText: 'More',
  overflowMenuTitleText: 'All',
  overflowMenuBackIconAriaLabel: 'Back',
  overflowMenuDismissIconAriaLabel: 'Close menu',
};