import { cn } from '@/lib/utils';
import React from 'react';
type Props = {
    children:React.ReactNode;
    className?:string;
    style?:React.CSSProperties;
}
const WrapperDiv:React.FC<Props> = ({ children, className, style, ...props }) => {
  return (
    <div 
    className={cn("bg-card/5 backdrop-brightness-90 shadow-lg drop-shadow-xl border rounded-xl mb-5 sm:py-10 py-4 sm:px-20 px-8 sm:pb-5 pb-2 backdrop-blur-sm sm:mt-16", className)} 
    style={style}
    {...props}
    >
      {children}
    </div>
  );
};

export default WrapperDiv;
