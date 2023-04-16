import { useState, useEffect, useContext, createContext, useCallback } from 'react';
// import { applyMode, applyDensity, Density, Mode } from '@cloudscape-design/global-styles';
import AppLayout from '@cloudscape-design/components/app-layout';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Input from '@cloudscape-design/components/input';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import { Outlet } from 'react-router-dom';
import { AppContext } from './AppContext';
import {
  topNavIdentityProps,
  topNavUtilitiesProps,
  topNavi18nStringsProps,
} from './topNavProps';
import MainHelpPanel from './MainHelpPanel';
import MainOutlet from './MainOutlet';
import en from './localization/en.json';
import messages_he from './localization/he.json';
import messages_ru from './localization/ru.json';
import messages_vi from './localization/vi.json';
import messages_zh_TW from './localization/zh-TW.json';
import { IntlProvider, FormattedMessage } from 'react-intl';

const messages = {
  'he': messages_he,
  'ru': messages_ru,
  'vi': messages_vi,
  'zh-TW': messages_zh_TW,
}
// const language = navigator.language.split(/[-_]/)[0];
const language = 'he';

// const AppContext = createContext();
const values = {};

function App() {
  const [path, setPath] = useState(window.location.href);
  const [langVal, setLangVal] = useState(language);
  const [prefLang, setPrefLang] = useState('');
  values.prefLang = prefLang;
  const [langTexts, setLangTexts] = useState({});
  values.langTexts = langTexts;
  const localize = (text) => {
    return langTexts[text];
  };
  values.localize = localize;

  const importLang = useCallback(() => {
    setPrefLang(window.navigator.language);
    switch (window.navigator.language) {
      case 'en' || 'en-US' || 'en-GB':
        import('./localization/en.json')
          .then((textObj) => {
            console.log('The text returned is:\n');
            console.log(JSON.stringify(textObj.default));
            setLangTexts(textObj.default);
            setTimeout(() => {
              console.log('BOOM\n');
              console.log(langTexts);
            }, 5000)
          })
          .catch((err) => console.error(err));
        break;
      case 'ru' || 'ru-RU':
        import('./localization/ru.json')
          .then((textObj) => {
            console.log('The text returned is:\n');
            console.log(JSON.stringify(textObj.default));
            setLangTexts(textObj.default);
            setTimeout(() => {
              console.log('BOOM\n');
              console.log(langTexts);
            }, 5000)
          })
          .catch((err) => console.error(err));
        break;
      case 'vi' || 'vi-VN':
        import('./localization/vi.json')
          .then((textObj) => {
            console.log('The text returned is:\n');
            console.log(JSON.stringify(textObj.default));
            setLangTexts(textObj.default);
            setTimeout(() => {
              console.log('BOOM\n');
              console.log(langTexts);
            }, 5000)
          })
          .catch((err) => console.error(err));
        break;
      case 'zh' || 'zh-CN':
        import('./localization/zh.json')
          .then((textObj) => {
            console.log('The text returned is:\n');
            console.log(JSON.stringify(textObj.default));
            setLangTexts(textObj.default);
            setTimeout(() => {
              console.log('BOOM\n');
              console.log(langTexts);
            }, 5000)
          })
          .catch((err) => console.error(err));
        break;
      case 'zn-TW':
        import('./localization/zh-TW.json')
          .then((textObj) => {
            console.log('The text returned is:\n');
            console.log(JSON.stringify(textObj.default));
            setLangTexts(textObj.default);
            setTimeout(() => {
              console.log('BOOM\n');
              console.log(langTexts);
            }, 5000)
          })
          .catch((err) => console.error(err));
        break;
      default:
        import('./localization/en.json')
          .then((textObj) => {
            console.log('The text returned is:\n');
            console.log(JSON.stringify(textObj.default));
            setLangTexts(textObj.default);
            setTimeout(() => {
              console.log('BOOM\n');
              console.log(langTexts);
            }, 5000)
          })
          .catch((err) => console.error(err));
    }
  }, [window.navigator.language]);

  const changeLang = useCallback((lang) => {
    setPrefLang(lang);
    switch (lang) {
      case 'en':
        setLangTexts(en);
        console.log('EN')
        console.log(en);
        break;
      case 'ru':
        setLangTexts(ru);
        console.log('RU');
        console.log(ru);
        break;
      default:
        setLangTexts(en);
    }
  }, [window.navigator.language]);

  useEffect(() => {
    setPath(window.location.href);
  }, [window.location.href]);

  return (
    <AppContext.Provider value={values}>
      <IntlProvider messages={messages[langVal]} locale={navigator.language} defaultLocale="en">
        <ContentLayout
          header={
            <TopNavigation
              identity={topNavIdentityProps}
              utilities={topNavUtilitiesProps}
              i18nStrings={topNavi18nStringsProps}
              search={
                <Autosuggest
                  onChange={({ detail }) => setLangVal(detail.value)}
                  value={langVal}
                  options={[
                    { label: "Arabic", value: "ar" },
                    { label: "Chinese (CN)", value: "zh" },
                    { label: "Chinese (TW)", value: "zh-TW" },
                    { label: "English", value: "en" },
                    { label: "French", value: "fr" },
                    { label: "German", value: "de" },
                    { label: "Greek", value: "el" },
                    { label: "Hebrew", value: "he" },
                    { label: "Hindi", value: "hi" },
                    { label: "Italian", value: "it" },
                    { label: "Japanese", value: "ja" },
                    { label: "Korean", value: "ko" },
                    { label: "Russian", value: "ru" },
                    { label: "Spanish", value: "es" },
                    { label: "Vietnamese", value: "vi" },
                  ]}
                  enteredTextLabel={val => `Use: ${val}`}
                  ariaLabel="Autosuggest to pick site language"
                  placeholder={"Search for a language..."}
                  empty="No matches found..."
                />
              }
            />
          }
        >
          <AppLayout
            navigation={
              <SideNavigation
                header={{
                  href: '/',
                  text: <FormattedMessage
                    id="app.sideNav.mainMenu"
                    defaultMessage="<b>Main Menu</b>"
                    description="Main menu button in the side navigation menu"
                    values={{
                      b: chunks => <b>{chunks}</b>
                    }}
                  />
                }}
                items={[
                  {
                    type: 'expandable-link-group',
                    text: (
                      <FormattedMessage
                        id="app.sideNav.flashcards"
                        defaultMessage="<b>Flashcards</b>"
                        description=""
                        values={{
                          b: chunks => <b>{chunks}</b>
                        }}
                      />
                    ),
                    href: '/app/collections',
                    items: [
                      {
                        type: 'link',
                        text: (
                          <FormattedMessage
                            id="app.sideNav.flashcards.studyMode"
                            defaultMessage="Study mode"
                            description=""
                          />
                        ),
                        href: '/app/collections/study'
                      },
                      {
                        type: 'expandable-link-group',
                        text: (
                          <FormattedMessage
                            id="app.sideNav.flashcards.testing"
                            defaultMessage="<b>Testing</b>"
                            description=""
                            values={{
                              b: chunks => <b>{chunks}</b>
                            }}
                          />
                        ),
                        href: '/app/collections/test',
                        items: [
                          {
                            type: 'link',
                            text: (
                              <FormattedMessage
                                id="app.sideNav.flashcards.testing.easyMode"
                                defaultMessage="Easy mode"
                                description=""
                              />
                            ),
                            href: '/app/collections/test/easy'
                          },
                          {
                            type: 'link',
                            text: (
                              <FormattedMessage
                                id="app.sideNav.flashcards.testing.difficultMode"
                                defaultMessage="Difficult mode"
                                description=""
                              />
                            ),
                            href: '/app/collections/test/difficult'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'expandable-link-group',
                    text: (
                      <FormattedMessage
                        id="app.sideNav.chat"
                        defaultMessage="<b>Chat</b>"
                        description=""
                        values={{
                          b: chunks => <b>{chunks}</b>
                        }}
                      />
                    ),
                    href: '/app/chat',
                    items: [
                      {
                        type: 'link',
                        text: 'Юля Рожкова',
                        href: '#',
                      },
                      {
                        type: 'link',
                        text: 'Ha Thao',
                        href: '#',
                      },
                      {
                        type: 'link',
                        text: 'Theresa Tran',
                        href: '#',
                      },
                      {
                        type: 'link',
                        text: 'דוד המלך',
                        href: '#',
                      },
                      {
                        type: 'link',
                        text: '김유니스',
                        href: '#',
                      },
                      {
                        type: 'link',
                        text: '雅之 林',
                        href: '#',
                      }
                    ]
                  },
                  {
                    type: 'link',
                    text: (
                      <FormattedMessage
                        id="app.sideNav.videos"
                        defaultMessage="Videos"
                        description=""
                      />
                    ),
                    href: '/videos',
                  },
                  {
                    type: 'link',
                    text: (
                      <FormattedMessage
                        id="app.sideNav.schedule"
                        defaultMessage="Schedule"
                        description=""
                      />
                    ),
                    href: '/schedule',
                  },
                  {
                    type: 'link',
                    text: (
                      <FormattedMessage
                        id="app.sideNav.stats"
                        defaultMessage="Stats"
                        description=""
                      />
                    ),
                    href: '/stats',
                  },
                  {
                    type: 'link',
                    text: (
                      <FormattedMessage
                        id="app.sideNav.docs"
                        defaultMessage="Documents"
                        description=""
                      />
                    ),
                    href: '/docs',
                  },
                  {
                    type: 'link',
                    text: (
                      <FormattedMessage
                        id="app.sideNav.dict"
                        defaultMessage="Dictionary"
                        description=""
                      />
                    ),
                    href: '/dict'
                  }
                ]}
              />
            }
            content={<MainOutlet path={path}/>}
            tools={<MainHelpPanel/>}
          />
        </ContentLayout>
      </IntlProvider>
    </AppContext.Provider>
  )
}

export default App
