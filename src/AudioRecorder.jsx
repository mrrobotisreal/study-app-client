import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { FormattedMessage } from 'react-intl';

export default function AudioRecorder() {
  const [audioBlobs, setAudioBlobs] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [streamBeingCaptured, setStreamBeingCaptured] = useState(null);

  const start = () => {
    // Feature detection
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      // Feature is not supported in the browser
      // return custom error, eventually...
      return new Error('Error detecting browser media capabilities, or browser media is not supported');
    } else {
      // Feature is supported in the browser
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          const opts = {
            audioBitsPerSecond: 128000,
            mimeType: 'audio/webm',
          }
          const mediaRecorderObj = new MediaRecorder(stream, opts);
          mediaRecorderObj.start();

          const audioChunks = [];

          mediaRecorderObj.addEventListener('dataavailable', e => {
            audioChunks.push(event.data);
          });

          mediaRecorderObj.addEventListener('stop', () => {
            const audioBlob = new Blob(audioChunks, {
              type: 'audio/mp3',
            });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
            console.log('AUDIOOOOOO');
            console.log(audio);

            let fd = new FormData();
            fd.append('audio_data', audioBlob, 'user_collection_cardId.webm');
            for (const item  of fd.entries()) {
              console.log('The item is:\n', item);
              console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
              console.log(audioBlob.name);
            }
            fetch('http://localhost:3333/audio-test', {
              method: 'POST',
              body: fd,
            })
              .then(res => {
                console.log('fetch response is:\n', res);
              })
          })

          setTimeout(() => {
            mediaRecorderObj.stop();
          }, 3000);
        })
    }
  };

  const stop = () => {
    return
  };

  const cancel = () => {};

  // useEffect(() => {}, []);

  return (
    <Container
      header={
        <Header variant="h3">
          <FormattedMessage
            id="audioRecorder.header"
            defaultMessage="Audio recorder"
            description=""
          />
        </Header>
      }
    >
      <Button
        onClick={start}
      >
        <FormattedMessage
          id="audioRecorder.button"
          defaultMessage="Start recording"
          description=""
        />
      </Button>
    </Container>
  );
}