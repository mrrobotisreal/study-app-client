import * as React from "react";
import Button from '@cloudscape-design/components/button';
import Header from '@cloudscape-design/components/header';
import HelpPanel from "@cloudscape-design/components/help-panel";
import Icon from "@cloudscape-design/components/icon";
import SpaceBetween from '@cloudscape-design/components/space-between';
import { FormattedMessage } from 'react-intl';

export default function MainHelpPanel() {
  return (
    <HelpPanel
      footer={
        <div>
          <h3>
          Узнать больше <Icon name="external" />
          </h3>
          <ul>
            <li>
              <FormattedMessage
                id="mainHelpPanel.footer.appDocs"
                defaultMessage="<a>App documentation</a>"
                description=""
                values={{
                  a: chunks => <a href="https://github.com/mrrobotisreal">{chunks}</a>,
                }}
              />
            </li>
            <li>
            <a></a>
              <FormattedMessage
                id="mainHelpPanel.footer.awsDocs"
                defaultMessage="{link}"
                description=""
                value={{
                  link: (
                    <a href="https://docs.aws.amazon.com/index.html">
                      <FormattedMessage
                        id="mainHelpPanel.footer.awsDocs.awsDocs"
                        defaultMessage="AWS documentation"
                        description=""
                      />
                    </a>
                  )
                }}
              />
            </li>
          </ul>
        </div>
      }
      header={
        <Header
          variant="h2"
        >
          <FormattedMessage
            id="mainHelpPanel.header"
            defaultMessage="Help panel"
            description=""
          />
        </Header>
      }
    >
      <div>
        <FormattedMessage
          id="mainHelpPanel.content.p1"
          defaultMessage="<p>Welcome! This is where the help panel content will go in the future. For now, this text is just holding its place in order to show the translation effects.</p>"
          description=""
          values={{
            p: chunks => <p>{chunks}</p>,
          }}
        />

        <FormattedMessage
          id="mainHelpPanel.content.h4"
          defaultMessage="<h4>Rules</h4>"
          description=""
          values={{
            h4: chunks => <h4>{chunks}</h4>
          }}
        />
        <ol>
          <FormattedMessage
            id="mainHelpPanel.content.ol.li1"
            defaultMessage="<li>Have fun!</li>"
            description=""
            values={{
              li: chunks => <li>{chunks}</li>
            }}
          />
          <FormattedMessage
            id="mainHelpPanel.content.ol.li2"
            defaultMessage="<li>Try your best</li>"
            description=""
            values={{
              li: chunks => <li>{chunks}</li>
            }}
          />
          <FormattedMessage
            id="mainHelpPanel.content.ol.li3"
            defaultMessage="<li>Be consistent; study a little bit every day</li>"
            description=""
            values={{
              li: chunks => <li>{chunks}</li>
            }}
          />
          <FormattedMessage
            id="mainHelpPanel.content.ol.li4"
            defaultMessage="<li>Do your homework 👉🙈</li>"
            description=""
            values={{
              li: chunks => <li>{chunks}</li>
            }}
          />
        </ol>

        <FormattedMessage
          id="mainHelpPanel.content.h3"
          defaultMessage="<h3>Who is Юля Рожкова?</h3>"
          description=""
          values={{
            h3: chunks => <h3>{chunks}</h3>
          }}
        />
        <FormattedMessage
          id="mainHelpPanel.content.p2"
          defaultMessage="<p>Hello, my name is Julia! I'm the best Russian instructor you'll ever find, I promise. If you can't tell, I'm also very humble and modest 🤪.</p>"
          description=""
          values={{
            p: chunks => <p>{chunks}</p>
          }}
        />
      </div>
    </HelpPanel>
  );
}