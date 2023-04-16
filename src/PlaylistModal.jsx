import { useState, useEffect } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Modal from '@cloudscape-design/components/modal';
import SpaceBetween from '@cloudscape-design/components/space-between';
import paths from './ytPaths.json';

export default function PlaylistModal({ visible, setVisible, playlistTitle }) {
  const [index, setIndex] = useState(0);
  console.log(paths);

  useEffect(() => {
    for (let i = 0; i < paths.playlists.length; i++) {
      console.log(paths.playlists[i]);
      if (paths.playlists[i].name === playlistTitle) {
        setIndex(i);
        break;
      }
    }
  }, []);

  return (
    <Modal
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
          {playlistTitle}
        </Header>
      }
    >
      {paths.playlists[index].videos.map((video, i) => {
        return (
          <>
            <Container
              header={
                <Header
                  variant="h3"
                  actions={
                    <SpaceBetween direction="horizontal" size="s">
                      <Button
                        variant="primary"
                        onClick={() => console.log('Not set up yet!')}
                      >
                        Open in media player
                      </Button>
                    </SpaceBetween>
                  }
                >
                  {video.name}
                </Header>
              }
            >
              <iframe className="youtube-video" width="auto" height="auto" src={video.path} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Container>
            {
              i === paths.playlists[index].videos.length - 1
              ?
              null
              :
              <>
                <br/>
                <hr/>
                <br/>
              </>
            }
          </>
        )
      })}
    </Modal>
  );
}