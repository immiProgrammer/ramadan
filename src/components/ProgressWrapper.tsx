'use client';
import { ProgressBar, Link } from '@lexz451/next-nprogress';

const ProgressWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <ProgressBar
      color='hsl(var(--popover-foreground))'
      height='2px'
      options={{
        showSpinner:false
      }}
      />
        {children}
    </>
  );
};

export default ProgressWrapper;