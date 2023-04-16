import { useState, useEffect, useMemo } from 'react';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Textarea from '@cloudscape-design/components/textarea';
import Toggle from '@cloudscape-design/components/toggle';
import './Chat.css';

const allMessagesConst = [
  {
    messageContent: 'Hello Mitch! How are you today?',
    date: '02/19/2023',
    time: '9:42AM',
    sentOrReceived: 'received',
  },
  {
    messageContent: 'I\'m doing well, thank you!',
    date: '02/19/2023',
    time: '9:54AM',
    sentOrReceived: 'sent',
  },
  {
    messageContent: 'How about you?',
    date: '02/19/2023',
    time: '9:55AM',
    sentOrReceived: 'sent',
  },
  {
    messageContent: 'I\'m also doing well, thank you! Today I taught over 1000 classes. I have no idea how I was able to do it in 24 hours 🤪',
    date: '02/19/2023',
    time: '11:21AM',
    sentOrReceived: 'received',
  },
  {
    messageContent: 'Wow that is pretty incredible!',
    date: '02/19/2023',
    time: '12:17PM',
    sentOrReceived: 'sent',
  },
];

export default function ViewMessages() {
  const [messageBody, setMessageBody] = useState('');
  const [allMessages, setAllMessages] = useState(allMessagesConst);
  const [checked, setChecked] = useState(false);
  const [parsedText, setParsedText] = useState(null);

  const handleText = ({ detail }) => {
    if (checked) {
      let newComp = (
        <TextContent></TextContent>
      );
    } else {
      setMessageBody(detail.value);
    }
  }

  const handleSendMessage = () => {
    const currentDate = new Date();
    let mins = currentDate.getMinutes();
    let amPm = '';
    let hours = currentDate.getHours();
    let day = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    if (hours > 12) {
      amPm = 'PM';
    } else {
      amPm = 'AM';
    }
    hours = hours > 12 ? hours - 12 : hours;
    if (hours === 0) {
      hours = 12;
    }
    const messageDate = `${(month + 1) < 10 ? '0' + (month + 1) : month + 1}/${day < 10 ? '0' + day : day}/${year}`;
    console.log('message date: ' + messageDate);
    const currentTime = `${hours}:${mins < 10 ? '0' + mins : mins}${amPm}`;
    console.log('time string: ' + currentTime);
    const newMessage = {
      messageContent: messageBody,
      date: messageDate,
      time: currentTime,
      sentOrReceived: 'sent',
    };
    let newArr = [...allMessages];
    // allMessagesConst.push(newMessage);
    newArr.push(newMessage);
    setAllMessages(newArr);
    setMessageBody('');
  };

  const logAllMessages = () => {
    console.log(allMessages);
  }

  return (
    <Container
      header={
        <Header variant="h1">
          Юля Рожкова
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="l">
        {allMessages.map(({ messageContent, date, time, sentOrReceived }, i) => {
          return (
            // <Container
            // >
              <div key={`${i}=key=`} className={sentOrReceived === 'received' ? 'received' : 'sent'}>
                <SpaceBetween direction="vertical" size="xs">
                  <Box textAlign={sentOrReceived === 'received' ? 'right' : 'left'} variant="p"><strong>{messageContent}</strong></Box>
                  <Box textAlign={sentOrReceived === 'received' ? 'right' : 'left'} variant="p"><em>{date}</em></Box>
                  <Box textAlign={sentOrReceived === 'received' ? 'right' : 'left'} variant="p"><em>{time}</em></Box>
                </SpaceBetween>
              </div>
            // </Container>
          )
        })}
        <SpaceBetween direction="vertical" size="xs">
          <Textarea
            onChange={({ detail }) => setMessageBody(detail.value)}
            value={messageBody}
            placeholder="Write your message here..."
          />
          {checked ?
            <Container>
              <div id="md-div">
                {parsedText}
              </div>
            </Container>
            :
            null
          }
          <Toggle
            onChange={({ detail }) => setChecked(detail.checked)}
            checked={checked}
          >
            Markdown
          </Toggle>
          <ColumnLayout columns={2}>
            <SpaceBetween direction="horizontal" size="s">
              <Button
                variant="primary"
                onClick={handleSendMessage}
              >
                Send message
              </Button>
              <Button onClick={logAllMessages}>
                Log to console
              </Button>
            </SpaceBetween>
          </ColumnLayout>
        </SpaceBetween>
      </SpaceBetween>
    </Container>
  );
}