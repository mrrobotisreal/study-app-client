import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCollection } from '@cloudscape-design/collection-hooks';
import Button from '@cloudscape-design/components/button';
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Pagination from "@cloudscape-design/components/pagination";
import PropertyFilter from '@cloudscape-design/components/property-filter';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Spinner from '@cloudscape-design/components/spinner';
import Table from '@cloudscape-design/components/table';
import TextFilter from '@cloudscape-design/components/text-filter';
import { FormattedMessage } from 'react-intl';

function EmptyState({ title, subtitle, action }) {
  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" textAlign="center" color="inherit">
        {title}
      </Box>
      <Box variant="p" padding={{ bottom: 's' }} color="inherit">
        {subtitle}
      </Box>
      {action}
    </Box>
  );
};

export default function TextsTable() {
  const [filteringText, setFilteringText] = useState('');
  const [collections, setCollections] = useState([]);
  const [preferences, setPreferences] = useState({
    pageSize: 5,
    visibleContent: ['textName', 'firstRead', 'lastRead', 'vocab', 'completed'],
  });

  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
    [
      {
        textName: 'Sample text 1',
        firstRead: new Date(),
        lastRead: new Date(),
        vocab: 0,
        completed: false,
      },
      {
        textName: 'Sample text 2',
        firstRead: new Date(),
        lastRead: new Date(),
        vocab: 7,
        completed: true,
      },
      {
        textName: 'Sample text 3',
        firstRead: new Date(),
        lastRead: new Date(),
        vocab: 2,
        completed: false,
      },
      {
        textName: 'Sample text 4',
        firstRead: new Date(),
        lastRead: new Date(),
        vocab: 4,
        completed: true,
      }
    ],
    {
      filtering: {
        empty: (
          <EmptyState
            title={
              <FormattedMessage
                id="flashcards.empty.title"
                defaultMessage="No texts"
                description=""
              />
            }
            subtitle={
              <FormattedMessage
                id="flashcards.empty.subtitle"
                defaultMessage="No texts to display."
                description=""
              />
            }
            action={
              <Button>
                Do something...
              </Button>
            }
          />
        ),
        noMatch: (
          <EmptyState
            title={
              <FormattedMessage
                id="flashcards.noMatches.title"
                defaultMessage="No matches"
                description=""
              />
            }
            subtitle={
              // <FormattedMessage
              //   id="flashcards.noMatches.subtitle"
              //   defaultMessage="We can't find a card collection that matches that description."
              //   description=""
              // />
              'No texts match that description'
            }
            action={
              <Button
                onClick={() => actions.setFiltering('')}
              >
                <FormattedMessage
                  id="flashcards.noMatches.clearFilterButton"
                  defaultMessage="Clear filter"
                  description=""
                />
              </Button>
            }
          />
        ),
      },
      pagination: { pageSize: preferences.pageSize },
      sorting: {
        defaultState: {
          sortingColumn: {
            sortingField: 'textName',
          },
          isDescending: true,
        }
      },
      selection: {},
    }
  )

  function getMatchesCountText(count) {
    return count === 1 ? `1 match` : `${count} matches`;
  }

  const { selectedItems } = collectionProps;

  return (
    <>
      <Table
        {...collectionProps}
        columnDefinitions={[
          {
            id: 'textName',
            header: 'Text Name',
            cell: e => <Link to={`/texts/${e.textName}`}>{e.textName}</Link>,
            sortingField: 'textName',
          },
          {
            id: 'firstRead',
            header: 'First read',
            cell: e => e.firstRead.toDateString(),
            sortingField: 'firstRead',
          },
          {
            id: 'lastRead',
            header: 'Last read',
            cell: e => e.lastRead.toDateString(),
            sortingField: 'lastRead',
          },
          {
            id: 'vocab',
            header: 'Vocabulary',
            cell: e => e.vocab,
            sortingField: 'vocab',
          },
          {
            id: 'completed',
            header: 'Completed',
            cell: e => String(e.completed),
            sortingField: 'completed',
          },
        ]}
        wrapLines
        items={items}
        loadingText="Loading texts"
        selectionType="multi"
        visibleColumns={[
          'textName',
          'firstRead',
          'lastRead',
          'vocab',
          'completed',
        ]}
        filter={
          <TextFilter
            {...filterProps}
            countText={getMatchesCountText(filteredItemsCount)}
            filteringPlaceholder="Find texts"
          />
        }
        header={
          <Header
            counter={
              selectedItems.length
                ? `(${selectedItems.length}/${items.length})`
                : `(${items.length})`
            }
            actions={
              <SpaceBetween
                direction="horizontal"
                size="xs"
              >
                <Button disabled={selectedItems.length > 0 ? false : true}>
                  Delete
                </Button>
                <Button variant="primary" disabled={selectedItems.length > 0 ? false : true}>
                  Edit
                </Button>
              </SpaceBetween>
            }
          >
            Texts
          </Header>
        }
        pagination={
          <Pagination
            {...paginationProps}
            ariaLabels={{
              nextPageLabel: "Next page",
              previousPageLabel: "Previous page",
              pageLabel: pageNumber =>
                `Page ${pageNumber} of all pages`
            }}
          />
        }
        preferences={
          <CollectionPreferences
            // {...collectionPreferenceProps}
            title={
              <FormattedMessage
                id="flashcards.preferences.title"
                defaultMessage="Preferences"
                description=""
              />
            }
            confirmLabel={
              <FormattedMessage
                id="flashcards.preferences.confirmLabel"
                defaultMessage="Confirm"
                description=""
              />
            }
            cancelLabel={
              <FormattedMessage
                id="flashcards.preferences.cancelLabel"
                defaultMessage="Cancel"
                description=""
              />
            }
            preferences={preferences}
            onConfirm={({ detail }) => setPreferences(detail)}
            pageSizePreference={{
              title: (
                <FormattedMessage
                  id="flashcards.preferences.pageSizePreferences.title"
                  defaultMessage="Select page size"
                  description=""
                />
              ),
              options: [
                { value: 5, label: (
                  <FormattedMessage
                    id="flashcards.preferences.pageSizePreferences.options.fiveCards"
                    defaultMessage="5 texts"
                    description=""
                  />
                ) },
                { value: 10, label: (
                  <FormattedMessage
                    id="flashcards.preferences.pageSizePreferences.options.tenCards"
                    defaultMessage="10 texts"
                    description=""
                  />
                ) },
                { value: 15, label: (
                  <FormattedMessage
                    id="flashcards.preferences.pageSizePreferences.options.fifteenCards"
                    defaultMessage="15 texts"
                    description=""
                  />
                ) },
                { value: 20, label: (
                  <FormattedMessage
                    id="flashcards.preferences.pageSizePreferences.options.twentyCards"
                    defaultMessage="20 texts"
                    description=""
                  />
                ) },
              ]
            }}
            visibleContentPreference={{
              title: (
                <FormattedMessage
                  id="flashcards.preferences.visibleContent.title"
                  defaultMessage="Select visible content"
                  description=""
                />
              ),
              options: [
                {
                  label: (
                    <FormattedMessage
                      id="flashcards.preferences.visibleContent.options.label"
                      defaultMessage="Main distribution properties"
                      description=""
                    />
                  ),
                  options: [
                    {
                      id: "textName",
                      label: 'textName',
                    },
                    {
                      id: 'firstRead',
                      label: 'firstRead',
                    },
                    {
                      id: "lastRead",
                      label: 'lastRead',
                    },
                    {
                      id: "vocab",
                      label: 'vocab',
                    },
                    {
                      id: "completed",
                      label: 'completed',
                    }
                  ]
                }
              ]
            }}
          />
        }
      />
    </>
  );
}