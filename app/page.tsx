import Live from '@/components/Live';
import Image from 'next/image';
import { Room } from './Room';

'useClient';

export default function Page() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center text-center">
      <h1 className="text-2xl text-white">Figma</h1>
      <Live />
    </div>
  );
}
