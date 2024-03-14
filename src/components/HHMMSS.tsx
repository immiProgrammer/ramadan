import React from 'react'
import AnimatedNumber from 'react-awesome-animated-number'
import { commonClassName } from './TimeLabel';
import { cn } from '@/lib/utils';

interface HHMMSSProps {
    h: number;
    m: number;
    s: number;
    size?:number;
    className?:string;
    [key: string]: any; // Allow any other additional props
  }
  
const HHMMSS: React.FC<HHMMSSProps> = ({ h, m, s, size, className, ...prop }) => {
    return (
      <div style={{ fontSize: size || 40 }}
      className={cn(commonClassName, "flex items-center gap-1 font-bold", className)}
       {...prop}>
    <AnimatedNumber size={size || 40} value={h} minDigits={2} /> :{" "}
    <AnimatedNumber size={size || 40} value={m} minDigits={2} /> :{" "}
    <AnimatedNumber size={size || 40} value={s} minDigits={2} />
  </div>
  )
}

export default HHMMSS;
