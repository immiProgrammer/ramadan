import { cn } from '@/lib/utils'
import { formatDate } from 'date-fns'
import React from 'react'
export type Time2n =  number|string

export const commonClassName = "px-8 py-4 rounded-lg backdrop-blur-md border drop-shadow-lg shadow-sm"
export default function TimeLabel({label, date, align}:{label:string, date:Date, align?:'left'|'right'}) {
  return (
    <div className={cn(commonClassName, 'flex flex-col justify-center gap-0 leading-4 px-4 py-2 gradient-text', align==='left'? "items-start pr-6":"items-end pl-6")}>
        <span className='font-bold'>{label}</span>
        <HHMM date={date} />
    </div>
  )
}


export function HHMM({date, className}:{date:Date, className?:string}) {
  return (
    <div className={cn('text-xl font-bold', className)}>{formatDate(date, "hh")} : {formatDate(date, "mm")}</div>
  )
}

