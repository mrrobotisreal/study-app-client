import { useState, useEffect } from 'react';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import './Custom.css';

export default function Custom() {
  return (
    <SpaceBetween direction="vertical" size="s">
    <Container
      className="custom-css-button"
      header={
        <Header
          variant="h1"
        >
          Custom CSS Container
        </Header>
      }
    >
      <div className="custom-css" css={`
        background-color: linear-gradient(to bottom, blue, red);
      `}>
        Here is a bunch of extra text to try and take up a little more space. Why doesn't this work? It's not changing the CSS at all
        <Button
          className="custom-css-button"
        >
          Click me
        </Button>
      </div>
    </Container>
    <div
      css={`
        background-color: green;
      `}
      className="custom-css-button"
    >
    Here is a bunch of extra text to try and take up a little more space. Why doesn't this work? It's not changing the CSS at all
        <Button
          className="custom-css-button"
        >
          Click me
        </Button>
    </div>
    </SpaceBetween>
  )
}