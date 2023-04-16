import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { applyMode, applyDensity, Density, Mode } from '@cloudscape-design/global-styles';
import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import ButtonDropdown from '@cloudscape-design/components/button-dropdown';
import Cards from '@cloudscape-design/components/cards';
import CollectionPreferences from '@cloudscape-design/components/collection-preferences';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Icon from '@cloudscape-design/components/icon';
import Input from '@cloudscape-design/components/input';
import Modal from '@cloudscape-design/components/modal';
import Pagination from '@cloudscape-design/components/pagination';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Tabs from '@cloudscape-design/components/tabs';
import TextArea from '@cloudscape-design/components/textarea';
import TextFilter from '@cloudscape-design/components/text-filter';
import Toggle from '@cloudscape-design/components/toggle';
import './MainOutlet.css';

export default function MainOutlet({ path }) {
  const [selectedItems, setSelectedItems] = useState([{name: 'Карточки'}]);
  const [visible, setVisible] = useState(false);
  const [messageHeaderValue, setMessageHeaderValue] = useState('');
  const [messageBodyValue, setMessageBodyValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTabId, setActiveTabId] = useState('third');

  const changeMode = async (modeVal) => {
    await setDarkMode(modeVal);
    if (!darkMode) {
      applyMode(Mode.Dark);
    } else {
      applyMode(Mode.Light);
    }
  }

  const handleChangeMode = ({ detail }) => {
    changeMode(detail.checked);
  };

  return (
    <>
      {
        path === 'http://localhost:5173/'
        ?
        (
          <>
            <Container
              header={
                <Header
                  description="Welcome to my amazing website! You'll find everything you need to learn Russian here. If you wish to learn more before scheduling a lesson, please feel free to check out the free videos I have post in the video section, and you can also click the 'Send me a message' button and message me directly! I generally respond within 1 business day. Thank you so much for choosing my website and I look forward to learning with you!"
                  actions={
                    <SpaceBetween direction="horizontal" size="m">
                      <ButtonDropdown
                        items={[
                          {
                            text: "Instances",
                            items: [
                              { text: "Destroy", id: "destroy" },
                              { text: "Restart", id: "restart" }
                            ]
                          },
                          {
                            text: "SSH",
                            disabled: true,
                            items: [{ text: "Upload key", id: "upload" }]
                          }
                        ]}
                      >
                        Actions
                      </ButtonDropdown>
                      <Button
                        variant="primary"
                        onClick={() => setVisible(true)}
                      >
                        Send me a message! <Icon
                          svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-heart-fill" viewBox="0 0 16 16">
                          <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                        </svg>}
                        />
                      </Button>
                      {/* <Box variant="awsui-key-label">
                        {
                          darkMode
                          ?
                          "Light mode"
                          :
                          "Dark mode"
                        }
                      </Box> */}
                      <Toggle
                        onChange={handleChangeMode}
                        checked={darkMode}
                      >
                        {
                          darkMode
                          ?
                          "Light mode"
                          :
                          "Dark mode"
                        }
                      </Toggle>
                      {
                        darkMode
                        ?
                        <Icon
                          svg={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>
                          }
                        />
                        :
                        <Icon
                          svg={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>
                          }
                        />
                      }
                    </SpaceBetween>
                  }
                >
                  Добро пожаловать в <b>Приложение Юли</b>!
                </Header>
              }
            >
              <Tabs
                onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
                activeTabId={activeTabId}
                tabs={[
                  {
                    label: "Карточки",
                    id: "first",
                    content: (
                      <SpaceBetween direction="vertical" size="s">
                        <img src="https://www.learningliftoff.com/wp-content/uploads/2018/08/Flashcards-768x576.jpg"/>
                        <Box variant="p">
                          This is where the description of the Flashcards application will be located. For now, I'm just going to write a bunch of "dummy data" in the form of a bunch of random text in here that doesn't really mean anything. In fact, the only purpose of this text is simply to take up space for testing purposes, because I need to be able to see what this will look like with a hearty description written. Cool!
                        </Box>
                        <Button
                          variant="primary"
                          onClick={() => {}}
                          href="/app/collections"
                        >
                          Check out Flashcards! <Icon
                            svg={
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
  </svg>
                            }
                          />
                        </Button>
                      </SpaceBetween>
                    ),
                  },
                  {
                    label: "Чат",
                    id: "second",
                    content: (
                      <SpaceBetween direction="vertical" size="s">
                        <img src="https://yourdigitalleadsource.com/wp-content/uploads/2019/01/chat-benefits.png"/>
                        <Box variant="p">
                          This is where the description of the Chat application will be located. For now, I'm just going to write a bunch of "dummy data" in the form of a bunch of random text in here that doesn't really mean anything. In fact, the only purpose of this text is simply to take up space for testing purposes, because I need to be able to see what this will look like with a hearty description written. Cool!
                        </Box>
                        <Button
                          variant="primary"
                          onClick={() => {}}
                        >
                          Let's chat! <Icon
                          svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-heart-fill" viewBox="0 0 16 16">
                          <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                        </svg>}
                        />
                        </Button>
                      </SpaceBetween>
                    ),
                  },
                  {
                    label: "Видео",
                    id: "third",
                    content: (
                      <SpaceBetween direction="vertical" size="s">
                        <ColumnLayout columns={2}>
                          <iframe className="test-class" width="auto" height="auto" src="https://www.youtube.com/embed/c5bPq3eDxrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          <Box variant="p" margin={{left: 'm'}} textAlign="right">
                            Please come and take a look at all of the videos I have on my channel!
                            There are many great videos to check out. I think you will really enjoy them. Now, I know the rest of this description may not make sense, but that's okay. It's simply just for testing to make sure that I can get the aspect ratios correct. Let's save and see how it looks now with all this extra text that has been added!
                          </Box>
                        </ColumnLayout>
                        <ColumnLayout columns={2}>
                          <Box variant="p" float="left" textAlign="left">
                            Here is a little bit of some random sample text in order to take up some space on the screen for testing purposes. Three cheers for ridiculously long sentences! In fact, this section is not quite long enough yet, so let's keep going. Woohoo we can totally write really long sentences all day long just to take up a bunch of space on the screen and stuff like that. Awesome!
                          </Box>
                          <img src="russia-flag-icon.png"/>
                        </ColumnLayout>
                        <Box float="left">
                          <Button
                            variant="primary"
                            onClick={() => {}}
                          >
                            Check out my videos! <Icon
                              svg={
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels-fill" viewBox="0 0 16 16">
    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
  </svg>
                              }
                            />
                          </Button>
                        </Box>
                      </SpaceBetween>
                    ),
                  },
                  {
                    label: "Расписание",
                    id: "fourth",
                    content: (
                      <SpaceBetween direction="vertical" size="s">
                        <img width="100%" height="80%" src="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/133962701/image_133962701.jpg"/>
                        <Box variant="p" float="right">
                          This is where the description of the Scheduler application will be located. For now, I'm just going to write a bunch of "dummy data" in the form of a bunch of random text in here that doesn't really mean anything. In fact, the only purpose of this text is simply to take up space for testing purposes, because I need to be able to see what this will look like with a hearty description written. Cool!
                        </Box>
                        <Button
                          variant="primary"
                          onClick={() => {}}
                        >
                          Come schedule a class with me! <Icon
                            svg={
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-heart" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
  </svg>
                            }
                          />
                        </Button>
                      </SpaceBetween>
                    ),
                  },
                  {
                    label: "Статистика",
                    id: "fifth",
                    content: (
                      <SpaceBetween direction="vertical" size="xxxs">
                        <img src="https://images.ctfassets.net/pdf29us7flmy/4FaqpZFMenRQoDl0LGqFes/02c40a20ee37917f3e117b9c599f132d/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-01-Line.png"/>
                        <Box variant="p">
                          Okay, here we go again with a bunch of random text that is technically just a placeholder specifically to take up a bunch of space on this page. So yep, I write a bunch of random sentences practically at lightning speed because I can type so far. It's just like whoosh!!!! And I've typed a bunch of words. Now let's go check out these awesome charts!
                        </Box>
                        <Button
                          variant="primary"
                          onClick={() => {}}
                        >
                          Check out your stats! <Icon
                            svg={
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
  </svg>
                            }
                          />
                        </Button>
                      </SpaceBetween>
                    ),
                  },
                  {
                    label: "Документы",
                    id: "sixth",
                    content: "Blah blah blah... documents!",
                  }
                ]}
                variant="container"
              />
            </Container>
            <Modal
              onDismiss={() => setVisible(false)}
              visible={visible}
              closeAriaLabel="Close modal"
              footer={
                <Box float="right">
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button variant="link">Cancel</Button>
                    <Button variant="primary">Ok</Button>
                  </SpaceBetween>
                </Box>
              }
              header={
                <Header
                  variant="h1"
                  description="Thank you so much in advance for taking the time to send me this message. I appreciate you and I will get back to you as soon as possible!"
                >
                  Send me a message! 🤗
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="s">
                <Input
                  onChange={({ detail }) => setMessageHeaderValue(detail.value)}
                  value={messageHeaderValue}
                  placeholder="Please tell me your name here! 🤝"
                />
                <TextArea
                  onChange={({ detail }) => setMessageBodyValue(detail.value)}
                  value={messageBodyValue}
                  placeholder="Write your message to me here and I'll get back to you as soon as possible! 🤗"
                />
              </SpaceBetween>
            </Modal>
          </>
        )
        :
        <Outlet/>
      }
    </>
  )
}

{/* <Cards
            onSelectionChange={({ detail }) =>
              setSelectedItems(detail.selectedItems)
            }
            selectedItems={selectedItems}
            ariaLabels={{
              itemSelectionLabel: (e, n) => `select ${n.name}`,
              selectionGroupLabel: "Item selection"
            }}
            cardDefinition={{
              header: e => e.name,
              sections: [
                {
                  id: "description",
                  header: "Description",
                  content: e => e.description
                },
                {
                  id: "type",
                  header: "Type",
                  content: e => e.type
                },
                {
                  id: "size",
                  header: "Size",
                  content: e => e.size
                }
              ]
            }}
            cardsPerRow={[
              { cards: 1 },
              { minWidth: 500, cards: 2 }
            ]}
            items={[
              {
                name: "Карточки",
                alt: "First",
                description: "This is the first item",
                type: "1A",
                size: "Small",
              },
              {
                name: "Чат",
                alt: "Second",
                description: "This is the second item",
                type: "1B",
                size: "Large"
              },
              {
                name: "Видео",
                alt: "Third",
                description: "This is the third item",
                type: "1A",
                size: "Large"
              },
              {
                name: "Расписание",
                alt: "Fourth",
                description: "This is the fourth item",
                type: "2A",
                size: "Small"
              },
              {
                name: "Статистика",
                alt: "Fifth",
                description: "This is the fifth item",
                type: "2A",
                size: "Large"
              },
              {
                name: "Документы",
                alt: "Sixth",
                description: "This is the sixth item",
                type: "1A",
                size: "Small"
              }
            ]}
            loadingText="Loading resources"
            selectionType="multi"
            trackBy="name"
            visibleSections={["description", "type", "size"]}
            empty={
              <Box textAlign="center" color="inherit">
                <b>No resources</b>
                <Box
                  padding={{ bottom: "s" }}
                  variant="p"
                  color="inherit"
                >
                  No resources to display.
                </Box>
                <Button>Create resource</Button>
              </Box>
            }
            filter={
              <TextFilter filteringPlaceholder="Find resources" />
            }
            header={
              <Header
                counter={
                  selectedItems.length
                    ? "(" + selectedItems.length + "/10)"
                    : "(10)"
                }
                description="Welcome to my amazing website! You'll find everything you need to learn Russian here. If you wish to learn more before scheduling a lesson, please feel free to check out the free videos I have post in the video section, and you can also click the 'Send me a message' button and message me directly! I generally respond within 1 business day. Thank you so much for choosing my website and I look forward to learning with you!"
                actions={
                  <SpaceBetween direction="horizontal" size="m">
                    <ButtonDropdown
                      variant="primary"
                      items={[
                        {
                          text: "Instances",
                          items: [
                            { text: "Destroy", id: "destroy" },
                            { text: "Restart", id: "restart" }
                          ]
                        },
                        {
                          text: "SSH",
                          disabled: true,
                          items: [{ text: "Upload key", id: "upload" }]
                        }
                      ]}
                    >
                      Long label example
                    </ButtonDropdown>
                    <Button
                      onClick={() => {}}
                    >
                      Send me a message!
                    </Button>
                  </SpaceBetween>
                }
              >
                Добро пожаловать в <b>Приложение Юли</b>!
              </Header>
            }
            pagination={
              <Pagination currentPageIndex={1} pagesCount={2} />
            }
            preferences={
              <CollectionPreferences
                title="Preferences"
                confirmLabel="Confirm"
                cancelLabel="Cancel"
                preferences={{
                  pageSize: 6,
                  visibleContent: [
                    "description",
                    "type",
                    "size"
                  ]
                }}
                pageSizePreference={{
                  title: "Select page size",
                  options: [
                    { value: 6, label: "6 resources" },
                    { value: 12, label: "12 resources" }
                  ]
                }}
                visibleContentPreference={{
                  title: "Select visible content",
                  options: [
                    {
                      label: "Main distribution properties",
                      options: [
                        {
                          id: "description",
                          label: "Description"
                        },
                        { id: "type", label: "Type" },
                        { id: "size", label: "Size" }
                      ]
                    }
                  ]
                }}
              />
            }
          /> */}