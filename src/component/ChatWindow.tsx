
import React from 'react';

const ChatWindow = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className='sm:w-[720px] w-[90vw] mt-[60px] h-[90%]'>
      {children}
    </div>
  );
};

export default ChatWindow;