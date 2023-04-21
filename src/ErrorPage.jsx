import { useRouteError } from 'react-router-dom';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page"
      header={
        <Header variant="h1">
          OOPS!!!
        </Header>
      }
    >
      <p>Sorry, an unexpected fart 😅🌬... no, wait😳, make that a shart💩... has occurred and now we need to cleanup🚽🧻. Please try again later!</p>
      <p>
        <b><i>{error.statusText || error.message}</i></b>
      </p>
      <p>{error.stack}</p>
    </Container>
  )
}