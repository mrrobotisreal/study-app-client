import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Table from '@cloudscape-design/components/table';

export default function ViewFlashcardTimes() {
  return (
    <Container
      header={
        <Header variant="h1">
          Viewing <strong>Vietnamese Flashcards</strong> on <em>11/28/2022</em>
        </Header>
      }
    >
      <Table
        onSelectionChange={() => {}}
        selectedItems={[]}
        columnDefinitions={[
          {
            id: 'cardNumber',
            header: 'Card #',
            cell: e => e.cardNumber,
            sortingField: 'cardNumber',
          },
          {
            id: 'timeSpent',
            header: 'Time Spent',
            cell: e => e.timeSpent,
            sortingField: 'timeSpent',
          },
          {
            id: 'question',
            header: 'Question',
            cell: e => e.question,
          },
          {
            id: 'answer',
            header: 'Answer',
            cell: e => e.answer,
          }
        ]}
        items={[
          {
            cardNumber: 1,
            timeSpent: '7.62 seconds',
            question: 'Hello, am I a question?',
            answer: 'You are! And I am an answer!',
          },
          {
            cardNumber: 2,
            timeSpent: '9.08 seconds',
            question: 'Hmm, is this a tricky card?',
            answer: 'Gotcha! Yep it sure is',
          },
          {
            cardNumber: 3,
            timeSpent: '7.29 seconds',
            question: 'Where are my keys?',
            answer: 'In the freezer, again...',
          },
          {
            cardNumber: 4,
            timeSpent: '6.98 seconds',
            question: 'Where is Waldo?',
            answer: 'Probably wherever in the world Carmen Sandiego is!',
          },
          {
            cardNumber: 5,
            timeSpent: '5.33 seconds',
            question: 'How many software engineers does it take to change a lightbulb?',
            answer: 'None! We don\'t work on hardware!',
          },
        ]}
      />
    </Container>
  );
}