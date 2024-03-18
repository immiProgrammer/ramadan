import { ProgressBar } from '@lexz451/next-nprogress';
import {Suspense} from "react";
const ProgressWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProgressBar
          color='hsl(var(--popover-foreground))'
          height='2px'
          options={{
            showSpinner:false
          }}
          />
      </Suspense>
      {children}
    </>
  );
};

export default ProgressWrapper;