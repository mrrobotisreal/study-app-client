import { useState, useEffect } from 'react';
import Alert from '@cloudscape-design/components/alert';
import Button from '@cloudscape-design/components/button';
import ColumnLayout from '@cloudscape-design/components/column-layout';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
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
        >
          <FormattedMessage
            id="flashStudy.header"
            defaultMessage="Study Mode"
            description=""
          />
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="m">
        <Container
          header={
            <Header variant="h2">
              Flashcard Collection
            </Header>
          }
        ></Container>
      </SpaceBetween>
    </Container>
  );
}