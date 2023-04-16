import { useState } from 'react';
import Flashbar from '@cloudscape-design/components/flashbar';

export default function Flash({ type, content }) {
  const [items, setItems] = useState([{
    type: type,
    content: content,
    dismissible: true,
    dismissLabel: 'Dismiss message',
    onDismiss: () => setItems([]),
  }]);

  return (
    <Flashbar items={items} />
  );
}