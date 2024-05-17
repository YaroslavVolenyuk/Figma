import Image from 'next/image';
import { CollaborativeApp } from './CollaborativeApp';
import { Room } from './Room';

export default function Page() {
  return (
    <Room>
      <CollaborativeApp />
    </Room>
  );
}
