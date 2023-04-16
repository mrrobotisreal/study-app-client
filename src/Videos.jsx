import { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Icon from '@cloudscape-design/components/icon';
import Link from '@cloudscape-design/components/link';
import Modal from '@cloudscape-design/components/modal';
import SpaceBetween from '@cloudscape-design/components/space-between';
import PlaylistModal from './PlaylistModal';
import './Videos.css';
import { FormattedMessage } from 'react-intl';

export default function Videos() {
  const [visible, setVisible] = useState(false);
  const [clickedPlaylist, setClickedPlaylist] = useState('');

  const openModal = (title) => {
    setClickedPlaylist(title);
    setVisible(true);
  }

  return (
    <>
      <Container
        header={
          <Header
            variant="h1"
            description={
              <FormattedMessage
                id="videos.header.description"
                defaultMessage="Please feel free to watch these videos I've made, and in fact, I recommend you do! They are very useful and can help you to learn and grow in between our classes, or if you are studying on your own. Let's do this!"
                description=""
              />
            }
            info={
              <Link
                external
                variant="primary"
                href="https://www.youtube.com/@juliarozhkova2467"
              >
                <FormattedMessage
                  id="videos.header.myChannel"
                  defaultMessage="My Channel 😉🇷🇺"
                  description=""
                />
              </Link>}
          >
            <FormattedMessage
              id="videos.header"
              defaultMessage="Check out these playlists!"
              description=""
            />
          </Header>
        }
      >
        <Container
          header={
            <Header
              variant="h2"
              description={
                <FormattedMessage
                  id="videos.fakeDescription"
                  defaultMessage="This is a fake description being used as placeholder text..."
                />
              }
              actions={
                <SpaceBetween direction="horizontal" size="sm">
                  <Button
                    variant="primary"
                    onClick={() => openModal('Russian phrases')}
                  >
                    <FormattedMessage
                      id="videos.openPlaylistButton"
                      defaultMessage="Open playlist"
                      description=""
                    />
                  </Button>
                </SpaceBetween>
              }
              info={
                <>
                  {/* <Link
                    variant="primary"
                    href="#"
                    onClick={() => console.log('Hello, I have been clicked just now')}
                  >
                    Open
                  </Link> */}
                  <Link
                    external
                    variant="info"
                    href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt7a2IFbWjyQR9A44OoYonAf"
                  >
                    <Icon size="big"
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
                    }
                  />
                  </Link>
                </>
              }
            >
              <FormattedMessage
                id="videos.russianPhrases"
                defaultMessage="Russian phrases (6)"
                description=""
              />
            </Header>
          }
        >
          <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt7a2IFbWjyQR9A44OoYonAf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Container>
        <br/>
        <Container
          header={
            <Header
              variant="h2"
              description={
                <FormattedMessage
                  id="videos.fakeDescription"
                  defaultMessage="This is a fake description being used as placeholder text..."
                />
              }
              actions={
                <SpaceBetween direction="horizontal" size="sm">
                  <Button
                    variant="primary"
                    onClick={() => console.log('Hello fromplaylist clicky poo!')}
                  >
                    <FormattedMessage
                      id="videos.openPlaylistButton"
                      defaultMessage="Open playlist"
                      description=""
                    />
                  </Button>
                </SpaceBetween>
              }
              info={
                <Link
                  external
                  variant="info"
                  href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt5RnkMb1ogmevGB1g_5EfB5"
                >
                  <Icon size="big"
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
                    }
                  />
                </Link>
              }
            >
              <FormattedMessage
                id="videos.russianHandwriting"
                defaultMessage="Russian handwriting (5)"
                description=""
              />
            </Header>
          }
        >
          <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt5RnkMb1ogmevGB1g_5EfB5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Container>
        <br/>
        <Container
          header={
            <Header
              variant="h2"
              description={
                <FormattedMessage
                  id="videos.fakeDescription"
                  defaultMessage="This is a fake description being used as placeholder text..."
                />
              }
              actions={
                <SpaceBetween direction="horizontal" size="sm">
                  <Button
                    variant="primary"
                    onClick={() => console.log('Hello fromplaylist clicky poo!')}
                  >
                    <FormattedMessage
                      id="videos.openPlaylistButton"
                      defaultMessage="Open playlist"
                      description=""
                    />
                  </Button>
                </SpaceBetween>
              }
              info={
                <Link
                  external
                  variant="info"
                  href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt6hJ69e0ruSe3YdXgD2bUJO"
                >
                  <Icon size="big"
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
                    }
                  />
                </Link>
              }
            >
              <FormattedMessage
                id="videos.russianLessonsCourses"
                defaultMessage="Russian lessons / course (19)"
                description=""
              />
            </Header>
          }
        >
          <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt6hJ69e0ruSe3YdXgD2bUJO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Container>
        <br/>
        <Container
          header={
            <Header
              variant="h2"
              description={
                <FormattedMessage
                  id="videos.fakeDescription"
                  defaultMessage="This is a fake description being used as placeholder text..."
                />
              }
              actions={
                <SpaceBetween direction="horizontal" size="sm">
                  <Button
                    variant="primary"
                    onClick={() => console.log('Hello fromplaylist clicky poo!')}
                  >
                    <FormattedMessage
                      id="videos.openPlaylistButton"
                      defaultMessage="Open playlist"
                      description=""
                    />
                  </Button>
                </SpaceBetween>
              }
              info={
                <Link
                  external
                  variant="info"
                  href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt6KYqHM_stMmUtYYzZGuaz-"
                >
                  <Icon size="big"
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
                    }
                  />
                </Link>
              }
            >
              <FormattedMessage
                id="videos.russianPronunciation"
                defaultMessage="Russian pronunciation (14)"
                description=""
              />
            </Header>
          }
        >
          <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt6KYqHM_stMmUtYYzZGuaz-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Container>
        <br/>
        <Container
          header={
            <Header
              variant="h2"
              description={
                <FormattedMessage
                  id="videos.fakeDescription"
                  defaultMessage="This is a fake description being used as placeholder text..."
                />
              }
              actions={
                <SpaceBetween direction="horizontal" size="sm">
                  <Button
                    variant="primary"
                    onClick={() => console.log('Hello fromplaylist clicky poo!')}
                  >
                    <FormattedMessage
                      id="videos.openPlaylistButton"
                      defaultMessage="Open playlist"
                      description=""
                    />
                  </Button>
                </SpaceBetween>
              }
              info={
                <Link
                  external
                  variant="info"
                  href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt4uiiezFFczNDTryM13g6nJ"
                >
                  <Icon size="big"
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
                    }
                  />
                </Link>
              }
            >
              <FormattedMessage
                id="videos.russianCultureLessons"
                defaultMessage="Russian culture / Russian lessons (9)"
                description=""
              />
            </Header>
          }
        >
          <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt4uiiezFFczNDTryM13g6nJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Container>
        <br/>
        <Container
          header={
            <Header
              variant="h2"
              description={
                <FormattedMessage
                  id="videos.fakeDescription"
                  defaultMessage="This is a fake description being used as placeholder text..."
                />
              }
              actions={
                <SpaceBetween direction="horizontal" size="sm">
                  <Button
                    variant="primary"
                    onClick={() => console.log('Hello fromplaylist clicky poo!')}
                  >
                    <FormattedMessage
                      id="videos.openPlaylistButton"
                      defaultMessage="Open playlist"
                      description=""
                    />
                  </Button>
                </SpaceBetween>
              }
              info={
                <Link
                  external
                  variant="info"
                  href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt6v2-OPE3pE5W_W-XRvfvQ3"
                >
                  <Icon size="big"
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
                    }
                  />
                </Link>
              }
            >
              <FormattedMessage
                id="videos.russianPronunciationCertainWords"
                defaultMessage="Russian pronunciation - Reading of certain words (15)"
                description=""
              />
            </Header>
          }
        >
          <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt6v2-OPE3pE5W_W-XRvfvQ3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Container>
        <br/>
        <Container
          header={
            <Header
              variant="h2"
              description={
                <FormattedMessage
                  id="videos.fakeDescription"
                  defaultMessage="This is a fake description being used as placeholder text..."
                />
              }
              actions={
                <SpaceBetween direction="horizontal" size="sm">
                  <Button
                    variant="primary"
                    onClick={() => console.log('Hello fromplaylist clicky poo!')}
                  >
                    <FormattedMessage
                      id="videos.openPlaylistButton"
                      defaultMessage="Open playlist"
                      description=""
                    />
                  </Button>
                </SpaceBetween>
              }
              info={
                <Link
                  external
                  variant="info"
                  href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt6d7FAVga10QOXqtjfM-xBx"
                >
                  <Icon size="big"
                    svg={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
  </svg>
                    }
                  />
                </Link>
              }
            >
              <FormattedMessage
                id="videos.forPostsAndArticles"
                defaultMessage="For posts and articles (2)"
                description=""
              />
            </Header>
          }
        >
          <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt6d7FAVga10QOXqtjfM-xBx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Container>
      </Container>
      <PlaylistModal
        visible={visible}
        setVisible={setVisible}
        playlistTitle={clickedPlaylist}
      />
      {/* <Modal
        onDismiss={() => setVisible(false)}
        visible={visible}
        closeAriaLabel="Close modal"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="l">
              <Button variant="link">Cancel</Button>
              <Button variant="primary">Ok</Button>
            </SpaceBetween>
          </Box>
        }
        header={
          <Header
            variant="h2"
          >
            {'Russian phrases (6)'}
          </Header>
        }
      >
        <SpaceBetween direction="vertical" size="l">
          <Container
            header={
              <Header variant="h3" description="Generic description for video 1">
                Russian phrases video 1
              </Header>
            }
          >
            <iframe className="youtube-video" width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLdTzP9CpAPt6d7FAVga10QOXqtjfM-xBx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Container>
        </SpaceBetween>
      </Modal> */}
    </>
  )
}
