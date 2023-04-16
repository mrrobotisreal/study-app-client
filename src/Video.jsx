import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Link from '@cloudscape-design/components/link';

export default function Video({ videoPath }) {
  return (
    <Container
      header={
        <Header
          variant="h1"
          description="This is a description for this particular video. This will need to dynamically update in the future of course."
          info={
            <Link
              external
              variant="info"
              href="https://www.youtube.com/playlist?list=PLdTzP9CpAPt7a2IFbWjyQR9A44OoYonAf"
            >
              Playlist link 🎥
            </Link>
          }
      }
  )
}