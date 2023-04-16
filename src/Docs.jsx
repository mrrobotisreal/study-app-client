import { useState } from 'react';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Grid from '@cloudscape-design/components/grid';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import './Docs.css';

export default function Docs() {
  return (
    <Container
      header={
        <Header
          variant="h1"
          description="Here you can find a list of Google documents that I have provided for you."
          actions={
            <SpaceBetween direction="horizontal" size="s">
              <Button
                variant="primary"
              >
                Do something...
              </Button>
            </SpaceBetween>
          }
        >
          Google Docs
        </Header>
      }
    >
      <SpaceBetween direction="horizontal" size="l">
        <iframe className="test-class" width="auto" height="600" src="https://docs.google.com/document/d/e/2PACX-1vQGXPAsPiiOxoYN1MXBZsecpnFGp3GuTtzXNFeJgUAnddM3k8L75xAiuE2-AXWPGlEtDwXpvjJ95Dai/pub?embedded=true"></iframe>
        <span>Hmm, hello there. This is just a tiny little bit of some sample text in order to take up some space on the screen and see how it ends up looking and working out and stuff like that. Mmm yeah, mmmmkay....</span>
      </SpaceBetween>
    </Container>
  )
}