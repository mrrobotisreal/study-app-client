import { useState } from 'react';
import Calendar from '@cloudscape-design/components/calendar';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Header from '@cloudscape-design/components/header';
import Modal from '@cloudscape-design/components/modal';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { FormattedMessage } from 'react-intl';
import './Scheduler.css';

export default function Scheduler() {
  const [value, setValue] = useState('');

  return (
    <Container
      header={
        <Header
          variant="h1"
          description={
            <FormattedMessage
              id="scheduler.header.description"
              defaultMessage="Please pick a date and time that you'd like to have a class with me. I look forward to meeting you soon!"
              description=""
            />
          }
          actions={
            <SpaceBetween direction="horizontal" size="s">
              <Button variant="primary">
                <FormattedMessage
                  id="scheduler.header.confirmButton"
                  defaultMessage="Confirm"
                  description=""
                />
              </Button>
            </SpaceBetween>
          }
        >
          <FormattedMessage
            id="scheduler.header"
            defaultMessage="Schedule a class"
            description=""
          />
        </Header>
      }
    >
      <Calendar
        className="test-class"
        onChange={({ detail }) => setValue(detail.value)}
        value={value}
        locale={window.navigator.language}
        nextMonthAriaLabel="В следующем месяце"
        previousMonthAriaLabel="Прошлый месяц"
        startOfWeek={0}
        todayAriaLabel="Сегодня"
      />
    </Container>
  );
}