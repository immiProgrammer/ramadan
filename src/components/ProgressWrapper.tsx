import { ProgressBar } from '@lexz451/next-nprogress';
import {Suspense} from "react";
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