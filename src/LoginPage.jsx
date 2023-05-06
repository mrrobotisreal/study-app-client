import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@cloudscape-design/components/alert';
import AppLayout from '@cloudscape-design/components/app-layout';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Flashbar from '@cloudscape-design/components/flashbar';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Icon from '@cloudscape-design/components/icon';
import Input from '@cloudscape-design/components/input';
import Select from '@cloudscape-design/components/select';
import SpaceBetween from  '@cloudscape-design/components/space-between';
import Spinner from '@cloudscape-design/components/spinner';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import {
  populateAppLayout,
} from './topNavProps';
import { useSaveUser } from './hooks/useSaveUser';
import { useCheckLogin } from './hooks/useCheckLogin';
import { UserContext } from './context/UserContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { username, setUsername, email, setEmail, test } = useContext(UserContext);
  const topNavProps = populateAppLayout(username);
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordIconVisible, setIsPasswordIconVisible] = useState('lock-private');
  const [passwordType, setPasswordType] = useState('password');
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [authNotifications, setAuthNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameInput = ({ detail }) => setUsername(detail.value);
  const handlePasswordInput = ({ detail }) => setPassword(detail.value);
  const handleEmailInput = ({ detail }) => setEmail(detail.value);

  const handleLoginSubmit = async () => {
    setIsLoading(true);
    if (isLoginVisible) {
      useCheckLogin({
        username,
        password,
        setIsAuthenticated,
        setIsLoading,
      });
    } else {
      useSaveUser({
        email,
        username,
        password,
      });
      setIsAuthenticated(true);
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
  const goHome = () => {
    navigate('/');
  }

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
          action: (
            <Button
              onClick={goHome}
            >
              Homepage
            </Button>
          ),
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
      if (isAuthenticated) {
        navigate('/');
      }
    }
  }, [isAuthenticated])

  return (
    <>
      <ContentLayout
        header={
          <TopNavigation
            identity={topNavProps.identity}
            utilities={[]}
            i18nStrings={topNavProps.i18n}
          />
        }
      >
        <AppLayout
          content={
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
                    <Form
                      actions={
                        <SpaceBetween direction="horizontal" size="s">
                          <Button
                            onClick={handleSignUpClick}
                          >
                            {!isLoginVisible ? "Sign up" : "Login"}
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
                  </Container>
                )
                : (
                  <Container
                    header={
                      <Header variant="h1">
                        {!isLoginVisible ? "Sign up" : "Login"}
                      </Header>
                    }
                  >
                    <Spinner size="large" />
                  </Container>
                )
              }
            </>
          }
          notifications={
            <Flashbar items={authNotifications} />
          }
          navigation={null}
          navigationHide={true}
          tools={null}
          toolsHide={true}
        />
      </ContentLayout>
    </>
  )
}