import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useCollection } from '@cloudscape-design/collection-hooks';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import PropertyFilter from '@cloudscape-design/components/property-filter';
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import SpaceBetween from '@cloudscape-design/components/space-between';
import { sampleFlashcardCollections } from './flashcardProps';
// import EmptyState from './EmptyState';
import { AppContext } from './AppContext';
import { useGetCollections } from './hooks/useGetCollections';
import CollectionHooksTable from './CollectionHooksTable';
import { FormattedMessage } from 'react-intl';

{/* <EmptyState
          title={'No collections'}
          subtitle={'There are no collections to display'}
          actions={
            <Button onClick={onCreateNewCollection}>Create collection</Button>
          }
        /> */}
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


export default function Flashcards({ store }) {
  const [filteringText, setFilteringText] = useState('');
  const [collections, setCollections] = useState([]);
  const [preferences, setPreferences] = useState({
    pageSize: 5,
    visibleContent: ['created', 'lastView', 'collection', 'totalCards', 'category', 'description'],
  });
  const navigate = useNavigate();
  const { prefLang } = useContext(AppContext);

  const onCreateNewCollection = () => {
    navigate('/app/collections/new');
  };

  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
    collections,
    {
      filtering: {
        empty: (
          <EmptyState
            title={
              <FormattedMessage
                id="flashcards.empty.title"
                defaultMessage="No collections"
                description=""
              />
            }
            subtitle={
              <FormattedMessage
                id="flashcards.empty.subtitle"
                defaultMessage="No card collections to display. Sorry! Try creating a new collection first."
                description=""
              />
            }
            action={
              <Button
                variant="primary"
                onClick={onCreateNewCollection}
              >
                <FormattedMessage
                  id="flashcards.empty.createCollectionButton"
                  defaultMessage="Create collection"
                  description=""
                />
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
              <FormattedMessage
                id="flashcards.noMatches.subtitle"
                defaultMessage="We can't find a card collection that matches that description."
                description=""
              />
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
            sortingField: 'lastView',
          },
          isDescending: true,
        }
      },
      selection: {},
    }
  )

  const formatItems = (newItems) => {
    const formattedItems = [];
    console.log(newItems)
    for (let i = 0; i < newItems.length; i++) {
      const formattedItem = {
        created: i === 0 ? new Date(2022, 10, 5) : new Date(2022, 7, 18),
        lastView: i === 0 ? new Date(2023, 0, 10) : new Date(2023, 1, 16),
        name: newItems[i].name,
        totalCards: newItems[i].cardList.length,
        alt: newItems[i].category,
        description: newItems[i].description,
      };
      formattedItems.push(formattedItem);
    }
    setCollections(formattedItems);
  }

  const getitems = async () => {
    const newItems = await useGetCollections('iamwintrow10');
    // store.dispatch({
    //   type: 'setCardCollections',
    //   cardCollections: newItems,
    // });
    // store.subscribe(() => {
    //   console.log('State update:');
    //   console.log(store.getState());
    // });
    formatItems(newItems);
  }

  function getMatchesCountText(count) {
    return count === 1 ? `1 match` : `${count} matches`;
  }

  useEffect(() => {
    const newItems = getitems();
  }, []);

  const { selectedItems } = collectionProps;

  return (
    <>
      <Table
        {...collectionProps}
        // ariaLabels={{
        //   selectionGroupLabel: "Items selection",
        //   allItemsSelectionLabel: ({ selectedItems }) =>
        //     `${selectedItems.length} ${
        //       selectedItems.length === 1 ? "item" : "items"
        //     } selected`,
        //   itemSelectionLabel: ({ selectedItems }, item) => {
        //     const isItemSelected = selectedItems.filter(
        //       i => i.name === item.name
        //     ).length;
        //     return `${item.name} is ${
        //       isItemSelected ? "" : "not"
        //     } selected`;
        //   }
        // }}
        columnDefinitions={[
          {
            id: "collection",
            header: (
              <FormattedMessage
                id="flashcards.collectionNameColumn"
                defaultMessage="Collection name"
                description=""
              />
            ),
            cell: e => <Link to={`/app/collections/study/${e.name}`}>{e.name}</Link>,
            sortingField: "name"
          },
          {
            id: "totalCards",
            header: (
              <FormattedMessage
                id="flashcards.totalCardsColumn"
                defaultMessage="Total cards"
                description=""
              />
            ),
            cell: e => e.totalCards,
            sortingField: "totalCards",
          },
          {
            id: "created",
            header: (
              <FormattedMessage
                id="flashcards.createdAtColumn"
                defaultMessage="Created at"
                description=""
              />
            ),
            cell: e => new Date(e.created).toDateString(),
            sortingField: "created",
          },
          {
            id: "lastView",
            header: (
              <FormattedMessage
                id="flashcards.lastViewColumn"
                defaultMessage="Last view"
                description=""
              />
            ),
            cell: e => new Date(e.lastView).toDateString(),
            sortingField: "lastView",
          },
          {
            id: "category",
            header: (
              <FormattedMessage
                id="flashcards.categoryColumn"
                defaultMessage="Category"
                description=""
              />
            ),
            cell: e => e.alt,
            sortingField: "alt"
          },
          {
            id: "description",
            header: (
              <FormattedMessage
                id="flashcards.descriptionColumn"
                defaultMessage="Description"
                description=""
              />
            ),
            cell: e => e.description
          }
        ]}
        // resizableColumns
        wrapLines
        items={items}
        loadingText="Loading collections"
        selectionType="multi"
        // trackBy="name"
        visibleColumns={[
          "created",
          "lastView",
          "collection",
          "totalCards",
          "category",
          "description"
        ]}
        filter={
          <TextFilter
            {...filterProps}
            countText={getMatchesCountText(filteredItemsCount)}
            filteringPlaceholder="Find collections"
            // filteringText={filteringText}
            // countText={filteredItemsCount}
            // onChange={({ detail }) => setFilteringText(detail.filteringText)}
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
                  <FormattedMessage
                    id="flashcards.header.editButton"
                    defaultMessage="Edit"
                    description=""
                  />
                </Button>
                <Button disabled={selectedItems.length > 0 ? false : true}>
                  <FormattedMessage
                    id="flashcards.header.deleteButton"
                    defaultMessage="Delete"
                    description=""
                  />
                </Button>
                <Button variant="primary" onClick={onCreateNewCollection}>
                  <FormattedMessage
                    id="flashcards.header.createCollectionButton"
                    defaultMessage="Create collection"
                    description=""
                  />
                </Button>
              </SpaceBetween>
            }
          >
            <FormattedMessage
              id="flashcards.header.title"
              defaultMessage="Flashcard collections"
              description=""
            />
          </Header>
        }
        pagination={
          <Pagination
            {...paginationProps}
            // currentPageIndex={1}
            // pagesCount={1}
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
                    defaultMessage="5 card collections"
                    description=""
                  />
                ) },
                { value: 10, label: (
                  <FormattedMessage
                    id="flashcards.preferences.pageSizePreferences.options.tenCards"
                    defaultMessage="10 card collections"
                    description=""
                  />
                ) },
                { value: 15, label: (
                  <FormattedMessage
                    id="flashcards.preferences.pageSizePreferences.options.fifteenCards"
                    defaultMessage="15 card collections"
                    description=""
                  />
                ) },
                { value: 20, label: (
                  <FormattedMessage
                    id="flashcards.preferences.pageSizePreferences.options.twentyCards"
                    defaultMessage="20 card collections"
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
                      id: "created",
                      label: (
                        <FormattedMessage
                          id="flashcards.preferences.visibleContent.options.options.created"
                          defaultMessage="Created at"
                          description=""
                        />
                      ),
                    },
                    {
                      id: "lastView",
                      label: (
                        <FormattedMessage
                            id="flashcards.preferences.visibleContent.options.options.lastView"
                            defaultMessage="Last view"
                            description=""
                          />
                      ),
                    },
                    {
                      id: "collection",
                      label: (
                        <FormattedMessage
                          id="flashcards.preferences.visibleContent.options.options.collectionName"
                          defaultMessage="Collection name"
                          description=""
                        />
                      ),
                      editable: false
                    },
                    {
                      id: "totalCards",
                      label: (
                        <FormattedMessage
                          id="flashcards.preferences.visibleContent.options.options.totalCards"
                          defaultMessage="Total cards"
                          description=""
                        />
                      ),
                    },
                    { id: "category", label: (
                      <FormattedMessage
                        id="flashcards.preferences.visibleContent.options.options.category"
                        defaultMessage="Category"
                        description=""
                      />
                    ) },
                    {
                      id: "description",
                      label: (
                        <FormattedMessage
                          id="flashcards.preferences.visibleContent.options.options.description"
                          defaultMessage="Description"
                          description=""
                        />
                      )
                    }
                  ]
                }
              ]
            }}
          />
        }
      />
      {/* <CollectionHooksTable/> */}
    </>
  );
}