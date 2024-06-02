import { useOthers } from '@/liveblocks.config';
import React from 'react';
import LiveCursors from './cursor/LiveCursors';

const Live = () => {
  const others = useOthers();
  return (
    <div>
      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
