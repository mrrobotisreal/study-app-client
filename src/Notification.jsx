import { useState } from 'react';
import Flashbar from '@cloudscape-design/components/flashbar';

export default function Notification({ notifications }) {
  const [items, setItems] = useState([]);

  return (
    <Flashbar items={items} />
  )
}