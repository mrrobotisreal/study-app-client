import * as React from 'react';
import { Link } from '@cloudscape-design/components';

export function getMatchesCountText(count) {
  return count === 1 ? `1 match` : `${count} matches`;
}

function formatDate(date) {
  const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });
  const timeFormatter = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: false });
  return `${dateFormatter.format(date)}, ${timeFormatter.format(date)}`;
}

function createLabelFunction(columnName) {
  return ({ sorted, descending }) => {
    const sortState = sorted ? `sorted ${descending ? 'descending' : 'ascending'}` : 'not sorted';
    return `${columnName}, ${sortState}.`;
  };
}

export const columnDefinitions = [
  {
    id: 'id',
    header: 'ID',
    cell: item => <Link href={`#${item.id}`}>{item.id}</Link>,
    ariaLabel: createLabelFunction('id'),
    sortingField: 'id',
  },
  {
    id: 'availabilityZone',
    header: 'Availability zone',
    cell: item => item.availabilityZone,
    ariaLabel: createLabelFunction('Availability zone'),
    sortingField: 'availabilityZone',
  },
  {
    id: 'state',
    header: 'State',
    cell: item => item.state,
    ariaLabel: createLabelFunction('State'),
    sortingField: 'state',
  },
  {
    id: 'lastModifield',
    header: 'Last modified',
    cell: item => formatDate(item.lastModified),
    ariaLabel: createLabelFunction('Last modified'),
    sortingComparator: (a, b) => a.lastModified.valueOf() - b.lastModified.valueOf(),
  },
];

export const paginationLabels = {
  nextPageLabel: 'Next page',
  pageLabel: pageNumber => `Go to page ${pageNumber}`,
  previousPageLabel: 'Previous page',
};

const pageSizePreference = {
  title: 'Select page size',
  options: [
    { value: 10, label: '10 resources' },
    { value: 20, label: '20 resources' },
  ],
};

const visibleContentPreference = {
  title: 'Select visible content',
  options: [
    {
      label: 'Main properties',
      options: columnDefinitions.map(({ id, header }) => ({ id, label: header, editable: id !== 'id' })),
    },
  ],
};
export const collectionPreferencesProps = {
  pageSizePreference,
  visibleContentPreference,
  cancelLabel: 'Cancel',
  confirmLabel: 'Confirm',
  title: 'Preferences',
};