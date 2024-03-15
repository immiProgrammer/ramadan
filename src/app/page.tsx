"use client";
import { ramadanDates, ramadanDateObj } from '@/data/radmadanDates';
import { cn, isDatesEqual, zfill } from "@/lib/utils";
import clsx from "clsx";
import { formatDate } from 'date-fns';
import Link from "next/link";
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
import { useRouter } from 'next/navigation';


export default function Home() {
  const currentDate = new Date()

  return (

    <div className='sm:mt-16 mt-0 w-full flex flex-col items-center'>
      <h1 className='text-center mb-5 sm:mt-5 gradient-text text-4xl font-extrabold'>Ramadan Calendar <br /> 2024</h1>
    <WrapperDiv className='min-w-fit w-3/4 sm:mt-0'>
    <div className='overflow-x-scroll'>
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
          return (<ScnRow key={rowIndex} rObj={robj} className={selected?'bg-muted/60 hover:bg-muted/70 text-[#feca7f]':""}/>)
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