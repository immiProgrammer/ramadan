"use client";
import { ramadanDates, ramadanDateObj } from '@/data/radmadanDates';
import { cn, isDatesEqual, zfill } from "@/lib/utils";
import { formatDate } from 'date-fns';
import React from 'react';
import WrapperDiv from './wrapper';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
// import { useRouter } from '@/hooks/useRouter';
import { useRouter as useNextRouter } from 'next/navigation';
import { Link, useRouter } from '@lexz451/next-nprogress';

export default function Home() {
  const currentDate = new Date()

  return (

    <div className='w-full flex flex-col items-center'>
      <h1 className='text-center mb-5 sm:mt-5 gradient-text textHeading font-extrabold'>Ramadan Calendar <br /> 2024</h1>
    <WrapperDiv className='min-w-fit w-11/12 lg:w-3/4 sm:mt-0'>
    <div className='overflow-x-auto'>
    <Table className='table-auto'>
      <TableCaption className='text-border'>According to the Greenwich Mean Time (GMT) set on your device.</TableCaption>
      <TableHeader className='bg-muted/50'>
        <TableRow className='hover:bg-transparent'>
          <TableHead></TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Day</TableHead>
          <TableHead>Sehar</TableHead>
          <TableHead>Iftar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ramadanDates.map((robj, rowIndex) => {
          let selected = isDatesEqual(currentDate, robj.seharDate);
          return (<ScnRow key={rowIndex} rObj={robj} className={selected?'bg-muted/60 hover:bg-muted/70 text-popover-foreground':"text-white"}/>)
        })}
      </TableBody>
    </Table>
    </div>
    </WrapperDiv>
    </div>

  )
}
type ScnRowProp = {
  rObj:ramadanDateObj;
  className?:string;
}
const ScnRow:React.FC<ScnRowProp> = ({rObj, className="", ...props})=>{
  const router = useRouter()
  // const nextRouter = useNextRouter()


  return (
    <TableRow {...props} className={cn("cursor-pointer", className)} onClick={(e)=> (router.push(`/${rObj.ramadanNo}`))}>
      <TableCell>
        <Link href={""}>
        {zfill(rObj.ramadanNo)}
        </Link>
      </TableCell>
      <TableCell>
        {formatDate(rObj.seharDate, "dd-LLL")}
      </TableCell>
      <TableCell>
        {formatDate(rObj.seharDate, "eeee")}
      </TableCell>
      <TableCell>
        {formatDate(rObj.seharDate, "hh:mm")}
      </TableCell>
      <TableCell>
        {formatDate(rObj.iftarDate, "hh:mm")}
      </TableCell>
    </TableRow>
  )
}