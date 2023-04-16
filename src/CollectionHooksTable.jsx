import React, { useState } from 'react';
import { useCollection } from '@cloudscape-design/collection-hooks';
import {
  Box,
  Button,
  CollectionPreferences,
  Header,
  Pagination,
  Table,
  TextFilter,
} from '@cloudscape-design/components';
// import allItems from './data';
import { columnDefinitions, getMatchesCountText, paginationLabels, collectionPreferencesProps } from './table-config';

const allItems = [
  {
    id: 'O4DMYB22MWEYROBVNSRAN',
    availabilityZone: 'us-east-1c',
    state: 'Healthy',
  },
  {
    id: 'S4JE6P56MI4XBCMD63GQP',
    availabilityZone: 'us-east-1a',
    state: 'Healthy',
  },
  {
    id: '7U59ZZLQYGXZFHTKZF7UI',
    availabilityZone: 'us-east-1d',
    state: 'Healthy',
  },
  {
    id: 'LF2QRGQR73UA8I4HOJXGP',
    availabilityZone: '	us-east-1b',
    state: 'Unhealthy',
  },
]

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
}

export default function CollectionHooksTable() {
  const [preferences, setPreferences] = useState({ pageSize: 10, visibleContent: ['id', 'availabilityZone', 'state'] });
  const { items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
    allItems,
    {
      filtering: {
        empty: (
          <EmptyState
            title="No instances"
            subtitle="No instances to display."
            action={<Button>Create instance</Button>}
          />
        ),
        noMatch: (
          <EmptyState
            title="No matches"
            subtitle="We can’t find a match."
            action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
          />
        ),
      },
      pagination: { pageSize: preferences.pageSize },
      sorting: {},
      selection: {},
    }
  );
  const { selectedItems } = collectionProps;
  return (
    <Table
      {...collectionProps}
      selectionType="multi"
      header={
        <Header
          counter={selectedItems.length ? `(${selectedItems.length}/${allItems.length})` : `(${allItems.length})`}
        >
          Instances
        </Header>
      }
      columnDefinitions={columnDefinitions}
      visibleColumns={preferences.visibleContent}
      items={items}
      pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels} />}
      filter={
        <TextFilter
          {...filterProps}
          countText={getMatchesCountText(filteredItemsCount)}
          filteringAriaLabel="Filter instances"
        />
      }
      preferences={
        <CollectionPreferences
          {...collectionPreferencesProps}
          preferences={preferences}
          onConfirm={({ detail }) => setPreferences(detail)}
        />
      }
    />
  );
}

    // <Table
    //   {...collectionProps}
    //   onSelectionChange={onSelectionChange}
    //   selectedItems={selectedItems}
    //   ariaLabels={{
    //     selectionGroupLabel: "Items selection",
    //     allItemsSelectionLabel: ({ selectedItems }) =>
    //       `${selectedItems.length} ${
    //         selectedItems.length === 1 ? "item" : "items"
    //       } selected`,
    //     itemSelectionLabel: ({ selectedItems }, item) => {
    //       const isItemSelected = selectedItems.filter(
    //         i => i.name === item.name
    //       ).length;
    //       return `${item.name} is ${
    //         isItemSelected ? "" : "not"
    //       } selected`;
    //     }
    //   }}
    //   columnDefinitions={[
    //     {
    //       id: "created",
    //       header: "Created at",
    //       cell: e => new Date(e.created).toDateString(),
    //       sortingField: "created",
    //     },
    //     {
    //       id: "lastView",
    //       header: "Last view",
    //       cell: e => new Date(e.lastView).toDateString(),
    //       sortingField: "lastView",
    //     },
    //     {
    //       id: "collection",
    //       header: "Collection name",
    //       cell: e => <Link to={`/app/collections/${e.name}`}>{e.name}</Link>,
    //       sortingField: "name"
    //     },
    //     {
    //       id: "totalCards",
    //       header: "Total cards",
    //       cell: e => e.totalCards,
    //       sortingField: "totalCards",
    //     },
    //     {
    //       id: "category",
    //       header: "Category",
    //       cell: e => e.alt,
    //       sortingField: "alt"
    //     },
    //     {
    //       id: "description",
    //       header: "Description",
    //       cell: e => e.description
    //     }
    //   ]}
    //   // resizableColumns
    //   wrapLines
    //   items={collections}
    //   loadingText="Loading collections"
    //   selectionType="multi"
    //   trackBy="name"
    //   visibleColumns={[
    //     "created",
    //     "lastView",
    //     "collection",
    //     "totalCards",
    //     "category",
    //     "description"
    //   ]}
    //   filter={
    //     <TextFilter
    //       {...filterProps}
    //       // filteringPlaceholder="Find collections"
    //       // filteringText={filteringText}
    //       // countText={filteredItemsCount}
    //       // onChange={({ detail }) => setFilteringText(detail.filteringText)}
    //     />
    //   }
    //   header={
    //     <Header
    //       counter={
    //         selectedItems.length
    //           ? `(${selectedItems.length}/${collections.length})`
    //           : `(${collections.length})`
    //       }
    //       actions={
    //         <SpaceBetween
    //           direction="horizontal"
    //           size="xs"
    //         >
    //           <Button disabled={selectedItems.length > 0 ? false : true}>
    //             Edit
    //           </Button>
    //           <Button disabled={selectedItems.length > 0 ? false : true}>
    //             Delete
    //           </Button>
    //           <Button variant="primary" onClick={onCreateNewCollection}>
    //             Create collection
    //           </Button>
    //         </SpaceBetween>
    //       }
    //     >
    //       {'Flashcard collections'}
    //     </Header>
    //   }
    //   pagination={
    //     <Pagination
    //       {...paginationProps}
    //       // currentPageIndex={1}
    //       // pagesCount={1}
    //       ariaLabels={{
    //         nextPageLabel: "Next page",
    //         previousPageLabel: "Previous page",
    //         pageLabel: pageNumber =>
    //           `Page ${pageNumber} of all pages`
    //       }}
    //     />
    //   }
    //   preferences={
    //     <CollectionPreferences
    //       // {...collectionPreferenceProps}
    //       title="Preferences"
    //       confirmLabel="Подтверждать"
    //       cancelLabel="Отмена"
    //       preferences={preferences}
    //       pageSizePreference={{
    //         title: "Select page size",
    //         options: [
    //           { value: 5, label: "5 card collections" },
    //           { value: 10, label: "10 card collections" },
    //           { value: 15, label: "15 card collections" },
    //           { value: 20, label: "20 card collections" },
    //         ]
    //       }}
    //       visibleContentPreference={{
    //         title: "Select visible content",
    //         options: [
    //           {
    //             label: "Main distribution properties",
    //             options: [
    //               {
    //                 id: "created",
    //                 label: "Created at",
    //               },
    //               {
    //                 id: "lastView",
    //                 label: "Last view",
    //               },
    //               {
    //                 id: "collection",
    //                 label: "Collection name",
    //                 editable: false
    //               },
    //               {
    //                 id: "totalCards",
    //                 label: "Total cards",
    //               },
    //               { id: "category", label: "Category value" },
    //               {
    //                 id: "description",
    //                 label: "Description"
    //               }
    //             ]
    //           }
    //         ]
    //       }}
    //     />
    //   }
    // />