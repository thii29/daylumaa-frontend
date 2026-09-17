import React from 'react';

type Props = {
  
};

const WelcomeTitle = ({...props}: Props) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-body font-semibold text-ink-400">
        Friday, Sep 18, 206
      </span>
      <span className='text-header-1 font-bold'>Good evening, Shirley</span>
    </div>
  );
};

export default WelcomeTitle;
