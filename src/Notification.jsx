import { useState } from 'react';
import Flashbar from '@cloudscape-design/components/flashbar';
import Confetti from 'react-confetti';

export default function Notification({ notifications }) {
  const [items, setItems] = useState([]);

  return (
    <>
      <Flashbar items={notifications} />
      <Confetti width={window.innerWidth} height={window.innerHeight} />
    </>
  )
}