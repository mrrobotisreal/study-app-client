import { useState, useEffect } from 'react';
import Alert from '@cloudscape-design/components/alert';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Icon from '@cloudscape-design/components/icon';
import Input from '@cloudscape-design/components/input';
import Link from '@cloudscape-design/components/link';
import Select from '@cloudscape-design/components/select';
import SpaceBetween from '@cloudscape-design/components/space-between';
import TextArea from '@cloudscape-design/components/textarea';
import { AppContext } from './AppContext';
// import AudioPlayer from './AudioPlayer';
import { FormattedMessage } from 'react-intl';

export default function FlashStudy() {
  return (
    <Container
      header={
        <Header
          variant="h1"
          description="Study Mode"
        >
          <FormattedMessage
            id="flashStudy.header"
            defaultMessage="Flashcard collection"
            description=""
          />
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="m">
        <Container
          header={
            <Header variant="h4">
              Question
            </Header>
          }
        ></Container>
        <Container
          header={
            <Header variant="h4">
              Answer
            </Header>
          }
        ></Container>
        <Container>
          <SpaceBetween direction="horizontal" size="s">
            <Button>
              <Icon name="angle-left" size="large"/>
            </Button>
              <SpaceBetween direction="vertical" size="xs">
                <Button
                  variant="primary"
                >
                  REVEAL
                </Button>
                <Button>
                  Got it!
                </Button>
                <Button>
                  Not this time...
                </Button>
              </SpaceBetween>
            <Button>
              <Icon name="angle-right" size="large"/>
            </Button>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </Container>
  );
}