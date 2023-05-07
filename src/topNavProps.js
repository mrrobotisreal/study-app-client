export const populateAppLayout = (username, handleTopNavDropDownClick) => {
  const identity = {
    href: '#',
    title: 'Приложение Юли',
    logo: {
      src: '/russia-flag-icon.png',
      alt: 'Флаг России',
    }
  };
  const utilities = [
    {
      type: 'button',
      iconName: 'notification',
      title: 'Уведомления',
      ariaLabel: 'Notifications (unread)',
      badge: true,
      disableUtilityCollapse: false,
      onClick: () => console.log('Hehe, that tickles!!! Stop clicking me')
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
      text: username,
      description: '',
      iconName: 'user-profile',
      onItemClick: ({ detail }) => handleTopNavDropDownClick(detail.id),
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
  const i18n = {
    searchIconAriaLabel: 'Search',
    searchDismissIconAriaLabel: 'Close search',
    overflowMenuTriggerText: 'More',
    overflowMenuTitleText: 'All',
    overflowMenuBackIconAriaLabel: 'Back',
    overflowMenuDismissIconAriaLabel: 'Close menu',
  };

  return {
    identity,
    utilities,
    i18n,
  };
};