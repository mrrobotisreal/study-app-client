import { useState } from 'react';
import Autosuggest from '@cloudscape-design/components/autosuggest';
import Badge from '@cloudscape-design/components/badge';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Cards from '@cloudscape-design/components/cards';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Textarea from '@cloudscape-design/components/textarea';
import { FormattedMessage } from 'react-intl';

export default function Chat() {
  const [friend, setFriend] = useState('');
  const [optionalHeader, setOptionalHeader] = useState('');
  const [messageBody, setMessageBody] = useState('');

  return (
    <>
      <SpaceBetween direction="vertical" size="m">
        <Container
          header={
            <Header
              variant="h1"
              description={
                <FormattedMessage
                  id="chat.header.description"
                  defaultMessage="Choose a friend from the autosuggest, then you can optionally add a header to your message in the top input, and write your message in the textarea below that input."
                  description=""
                />
              }
            >
              <FormattedMessage
                id="chat.header"
                defaultMessage="Quick chat"
                description=""
              />
            </Header>
          }
        >
          <SpaceBetween direction="vertical" size="m">
            <Autosuggest
              onChange={({ detail }) => setFriend(detail.value)}
              value={friend}
              options={[
                {
                  value: 'Юля Рожкова',
                },
                {
                  value: 'Ha Thao',
                },
                {
                  value: 'Theresa Tran',
                },
                {
                  value: 'דוד המלך',
                },
                {
                  value: '김유니스',
                },
                {
                  value: '雅之 林',
                },
              ]}
              enteredTextLabel={friend => `Message: "${friend}"`}
              ariaLabel="Autosuggest for which friend you wish to message."
              placeholder="Send a quick message to..."
              empty="No friend was found by that name, would you like to add them?"
            />
            <Input
              onChange={({ detail }) => setOptionalHeader(detail.value)}
              value={optionalHeader}
              placeholder="You can optionally add a header to your message here..."
            />
            <Textarea
              onChange={({ detail }) => setMessageBody(detail.value)}
              value={messageBody}
              placeholder="Write your message here and tell your friends all about your progress!"
            />
          </SpaceBetween>
        </Container>
        <hr/>
        <Container
          header={
            <Header>
              <FormattedMessage
                id="chat.chats.header"
                defaultMessage="Chats"
                description=""
              />
            </Header>
          }
        >
          <Cards
            cardDefinition={{
              header: item => (
                <Link href="/view-messages" fontSize="heading-m">{item.name}</Link>
              ),
              sections: [
                {
                  id: 'name',
                  header: '',
                  content: item => null,
                },
                {
                  id: 'badge',
                  header: '',
                  content: item => (
                    item.badge
                    ?
                    <Badge color="red">
                      <FormattedMessage
                        id="chat.chats.badge.new"
                        defaultMessage="New Messages!"
                        description=""
                      />
                    </Badge>
                    :
                    <Badge>
                      <FormattedMessage
                        id="chat.chats.badge.noNew"
                        defaultMessage="No no messages"
                        description=""
                      />
                    </Badge>
                  ),
                },
                {
                  id: 'lastInteraction',
                  header: '',
                  content: item => (
                    <FormattedMessage
                      id="chat.chats.lastInteraction"
                      defaultMessage="Last interaction was on {lastInteraction}"
                      description=""
                      values={{
                        lastInteraction: item.lastInteraction,
                      }}
                    />
                  ),
                }
              ]
            }}
            cardsPerRow={[
              {
                cards: 1,
              }
            ]}
            items={[
              {
                name: 'Юля Рожкова',
                badge: true,
                lastInteraction: '02/25/2023',
              },
              {
                name: 'Ha Thao',
                badge: false,
                lastInteraction: '02/24/2023',
              },
              {
                name: 'Theresa Tran',
                badge: false,
                lastInteraction: '02/24/2023',
              },
              {
                name: 'דוד המלך',
                badge: false,
                lastInteraction: '12/02/2022',
              },
              {
                name: '김유니스',
                badge: true,
                lastInteraction: '02/19/2023',
              },
              {
                name: '雅之 林',
                badge: false,
                lastInteraction: '01/25/2023',
              }
            ]}
            loadingText="Loading messages..."
            empty={
              <Box textAlign="center" color="inherit">
                <FormattedMessage
                  id="chat.empty.title"
                  defaultMessage="<b>No chats</b>"
                  description=""
                  value={{
                    b: chunks => <b>{chunks}</b>
                  }}
                />
                <Box
                  padding={{ bottom: "s" }}
                  variant="p"
                  color="inherit"
                >
                  <FormattedMessage
                    id="chat.empty.subtitle"
                    defaultMessage="No chats to display."
                    description=""
                  />
                </Box>
                <Button>
                  <FormattedMessage
                    id="chat.empty.button"
                    defaultMessage="Start a new chat!"
                    description=""
                  />
                </Button>
              </Box>
            }
          />
        </Container>
      </SpaceBetween>
    </>
  );
}
