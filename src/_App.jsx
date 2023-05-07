import { useState, useEffect, useContext, createContext, useCallback } from 'react';
window.global = window;
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin, googleLogout } from '@react-oauth/google';
import AppLayout from '@cloudscape-design/components/app-layout';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Flashbar from '@cloudscape-design/components/flashbar';
import Form from '@cloudscape-design/components/form';
import Header from '@cloudscape-design/components/header';
import Icon from '@cloudscape-design/components/icon';
import Input from '@cloudscape-design/components/input';
import Select from '@cloudscape-design/components/select';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import SpaceBetween from  '@cloudscape-design/components/space-between';
import Spinner from '@cloudscape-design/components/spinner';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import { Outlet } from 'react-router-dom';
import {
  populateAppLayout,
} from './topNavProps';
import MainHelpPanel from './MainHelpPanel';
import MainOutlet from './MainOutlet';
import Notification from './Notification';
import en from './localization/en.json';
import messages_en_US from './localization/en-US.json';
import messages_he from './localization/he.json';
import messages_ru from './localization/ru.json';
import messages_vi from './localization/vi.json';
import messages_zh_TW from './localization/zh-TW.json';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { CollectionContext, CollectionContextProvider } from './context/CollectionContext';
import { useCheckSession } from './hooks/useCheckSession';
import { useSaveUser } from './hooks/useSaveUser';
import { useCheckLogin } from './hooks/useCheckLogin';
import { UserContext } from './context/UserContext';
import { NotificationsContext } from './context/NotificationsContext';
import { useLogout } from './hooks/useLogout';
import { useGetGoogleProfile } from './hooks/useGetGoogleProfile';
import { useSetSession } from './hooks/useSetSession';
import GoogleButton from './GoogleButton';

const messages = {
  'en': en,
  'en-US': messages_en_US,
  'he': messages_he,
  'ru': messages_ru,
  'vi': messages_vi,
  'zh-TW': messages_zh_TW,
}
const language = navigator.language.split(/[-_]/)[0];
// const language = 'he';

function _App() {
  const { username, setUsername, email, setEmail, test } = useContext(UserContext);
  const { notifications, setNotifications, addNotification, clearNotification } = useContext(NotificationsContext);
  let storedUsername = localStorage.getItem('lh:username:5173');
  if (!storedUsername) {
    storedUsername = '';
  }
  const navigate = useNavigate();
  const [path, setPath] = useState(window.location.href);
  const [langVal, setLangVal] = useState(language);
  const [prefLang, setPrefLang] = useState('');
  const [langTexts, setLangTexts] = useState({});
  const [selectedLang, setSelectedLang] = useState(language);
  const [hasSession, setHasSession] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordIconVisible, setIsPasswordIconVisible] = useState('lock-private');
  const [passwordType, setPasswordType] = useState('password');
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [authNotifications, setAuthNotifications] = useState([]);
  const [password, setPassword] = useState('');
  const [gUser, setGUser] = useState([]);
  const [gProfile, setGProfile] = useState([]);
  const [name, setName] = useState('');

  const handleUsernameInput = ({ detail }) => setUsername(detail.value);
  const handlePasswordInput = ({ detail }) => setPassword(detail.value);
  const handleEmailInput = ({ detail }) => setEmail(detail.value);

  const handleLoginSubmit = async () => {
    setIsLoadingSubmit(true);
    if (isLoginVisible) {
      useCheckLogin({
        username,
        setUsername,
        password,
        setIsAuthenticated,
        setIsLoadingSubmit,
        addNotification,
        clearNotification,
      });
    } else {
      useSaveUser({
        email,
        username,
        password,
        setIsAuthenticated,
        setIsLoadingSubmit,
        addNotification,
        clearNotification,
      });
    }
    setEmail('');
    setUsername('');
    setPassword('');
  };
  const handleSignUpClick = () => {
    setIsLoginVisible(!isLoginVisible);
    setIsPasswordVisible(false);
    setEmail('');
    setUsername('');
    setPassword('');
  };
  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const getGoogleProfileReturns = (gUsername, options) => {
    useSetSession(gUsername, options, setHasSession, setIsLoadingSubmit, addNotification, clearNotification);
    setUsername(gUsername);
    setEmail(options.email);
    setName(options.name);
  };
  const handleGoogleSignin = useGoogleLogin({
    onSuccess: (res) => {
      setGUser(res);
      setIsLoadingSubmit(true);
      useGetGoogleProfile({
        isSignup: false,
        user: res,
        setGProfile,
        getGoogleProfileReturns,
      });
    },
    onError: (err) => console.error('Google fail:\n', err),
  });
  const handleGoogleSignup = useGoogleLogin({
    onSuccess: (res) => {
      setGUser(res);
      setIsLoadingSubmit(true);
      useGetGoogleProfile({
        isSignup: true,
        user: res,
        setGProfile,
        getGoogleProfileReturns,
      });
    },
    onError: (err) => console.error('Google fail:\n', err),
  });
  const handleTopNavDropDownClick = (id) => {
    switch (id) {
      case 'signout':
        if (!storedUsername) {
          console.log('Nuttin bruh');
        } else {
          useLogout(storedUsername, setHasSession, addNotification, clearNotification);
          setUsername('');
          setEmail('');
          setPassword('');
        }
      default:
        return;
    }
  };
  const [topNavProps, setTopNavProps] = useState(
    populateAppLayout(!storedUsername ? '' : storedUsername, handleTopNavDropDownClick)
  );
  useEffect(() => {
    setTopNavProps(populateAppLayout(!storedUsername ? '' : storedUsername, handleTopNavDropDownClick));
  }, [storedUsername]);
  // const topNavProps = populateAppLayout(!storedUsername, handleTopNavDropDownClick);

  useEffect(() => {
    setIsPasswordIconVisible(isPasswordVisible
      ? 'unlocked'
      : 'lock-private');
    setPasswordType(isPasswordVisible
      ? 'text'
      : 'password');
  }, [isPasswordVisible])

  useEffect(() => {
    if (isAuthenticated === null) {
      return;
    } else {
      setHasSession(isAuthenticated ? true : false);
      setAuthNotifications([
        isAuthenticated
        ? {
          header: 'Successfully authenticated',
          content: 'Welcome! You can come on in by clicking the button on the right that says "Homepage"',
          type: 'success',
          dismissible: true,
          dismissLabel: "Dismiss message",
          onDismiss: () => setAuthNotifications([]),
          id: "auth-success",
        } : {
          header: 'Failed to authenticate',
          content: 'Incorrect username or password',
          type: 'error',
          dismissible: true,
          dismissLabel: "Dismiss message",
          onDismiss: () => setAuthNotifications([]),
          id: "auth-fail",
        }
      ]);
      // if (isAuthenticated) {
      //   navigate('/');
      // }
    }
  }, [isAuthenticated])

  useEffect(() => {
    setPath(window.location.href);
  }, [window.location.href]);

  useEffect(() => {
    if (!storedUsername) {
      useCheckSession(null, setHasSession, setIsLoading);
    }
    useCheckSession(storedUsername, setHasSession, setIsLoading);
  }, []);

  return (
    <CollectionContextProvider>
      <IntlProvider messages={messages[langVal]} locale={navigator.language} defaultLocale="en">
        {!isLoading
          ? (
            <ContentLayout
              header={
                <TopNavigation
                  identity={topNavProps.identity}
                  utilities={hasSession ? topNavProps.utilities : []}
                  i18nStrings={topNavProps.i18n}
                  search={ hasSession ?
                    <Select
                      selectedOption={selectedLang}
                      onChange={({ detail }) => {
                        setLangVal(detail.selectedOption.value)
                        return;
                      }}
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
                      placeholder="Choose a language bro"
                      selectedAriaLabel="Selected"
                      empty="No languages"
                      loadingText="Loading languages"
                      statusType="none"
                    />
                    : null
                  }
                />
              }
            >
              <AppLayout
                notifications={
                  <Flashbar items={notifications} />
                }
                navigationHide={!hasSession}
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
                      },
                      {
                        type: 'link',
                        text: (
                          <FormattedMessage
                            id="app.sideNav.translate"
                            defaultMessage="Translator"
                            description=""
                          />
                        ),
                        href: '/translate'
                      }
                    ]}
                  />
                }
                content={hasSession
                  ? <MainOutlet path={path}/>
                  : (
                    <>
                      {
                        !isLoading
                        ? (
                          <Container
                            header={
                              <Header variant="h1">
                                {!isLoginVisible ? "Sign up" : "Login"}
                              </Header>
                            }
                          >
                            {!isLoadingSubmit
                              ?
                              <SpaceBetween direction="vertical" size="l">
                                <Form
                                  actions={
                                    <SpaceBetween direction="horizontal" size="s">
                                      <Button
                                        onClick={handleSignUpClick}
                                      >
                                        {isLoginVisible ? "Sign up" : "Login"}
                                      </Button>
                                      <Button
                                        variant="primary"
                                        onClick={handleLoginSubmit}
                                      >
                                        Submit
                                      </Button>
                                    </SpaceBetween>
                                  }
                                >
                                  <SpaceBetween direction="vertical" size="s">
                                    {!isLoginVisible
                                      ? (
                                        <>
                                          <Header variant="h4">
                                            Email
                                          </Header>
                                          <Input type="email" value={email} onChange={handleEmailInput} />
                                        </>
                                      ) : null
                                    }
                                    <Header variant="h4">
                                      Username
                                    </Header>
                                    <Input type="text" value={username} onChange={handleUsernameInput} />
                                    <Header
                                      variant="h4"
                                      info={
                                        <Button
                                          onClick={handleShowPassword}
                                        >
                                          <Icon size="normal" name={isPasswordIconVisible} />
                                        </Button>
                                      }
                                    >
                                      Password
                                    </Header>
                                    <Input type={passwordType} value={password} onChange={handlePasswordInput} />
                                  </SpaceBetween>
                                </Form>
                                <hr/>
                                <GoogleButton
                                  handleGoogleSignin={handleGoogleSignin}
                                  handleGoogleSignup={handleGoogleSignup}
                                  isLoginVisible={isLoginVisible}
                                />
                                {/* <GoogleLogin onSuccess={() => console.log('Google success!')} onError={(err) => console.error(err)} /> */}
                              </SpaceBetween>
                              : <Spinner size="large" />
                            }
                          </Container>
                        )
                        : (
                          <Container
                            header={
                              <Header variant="h1">
                                {!isLoginVisible ? "Validating Sign up..." : "Authenticating Login..."}
                              </Header>
                            }
                          >
                            <Spinner size="large" />
                          </Container>
                        )
                      }
                    </>
                  )
                }
                toolsHide={!hasSession}
                tools={<MainHelpPanel/>}
              />
            </ContentLayout>
          ) : (
            <Spinner size="large" />
          )
        }
      </IntlProvider>
    </CollectionContextProvider>
  )
}

export default _App


{/* <GoogleLogin onSuccess={() => console.log('Google success!')} onError={(err) => console.error(err)} /> */}