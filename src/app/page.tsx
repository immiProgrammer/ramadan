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

function rowClassName(even:boolean, isCurrent:boolean=false){
  return clsx("rowShadow TRow my-4", isCurrent && "")
}

function Home(){
  const headers = ["", "Date", "Day", "Sehar", "Iftar"]
  return (
    <WrapperDiv className='min-w-fit w-3/4'>
    <div className="w-full">
      <table className="table-auto box-border w-full">
        <thead className=''>
          <tr className='rounded-lg rowShadow TRow'>
            {headers.map((header, index) => (
              <th key={index} className="">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <br className='leading-[0em] block' />
        <tbody>
          {ramadanDates.map((robj, rowIndex) => (
            <Row key={rowIndex} rObj={robj} className={rowClassName(rowIndex%2==0)}/>
          ))}
        </tbody>
      </table>
    </div>
    </WrapperDiv>
  );
};

function Row({rObj, className=""}:{rObj:ramadanDateObj, className?:string}){
  return (
    <tr className={className}>
      <td>
        {zfill(rObj.ramadanNo)}
      </td>
      <td>
        {formatDate(rObj.seharDate, "dd-LLL")}
      </td>
      <td>
        {formatDate(rObj.seharDate, "eeee")}
      </td>
      <td>
        {formatDate(rObj.seharDate, "hh:mm")}
      </td>
      <td>
        {formatDate(rObj.iftarDate, "hh:mm")}
      </td>
    </tr>
  )
}

function HomeOld() {
  return (

    <ol className="lg:grid-rows-5 md:grid-rows-7 sm:grid-rows-10 grid-flow-row grid sm:grid-flow-col items-center content-center justify-center lg:h-40 gap-x-10 gap-y-1 mb-5">
      {ramadanDates.map((obj)=>(
        <li key={obj.ramadanNo} className="text-nowrap">🕋 <Link  href={`/${obj.ramadanNo}`} className="hover:underline text-[#ffb02e]"> Ramadan {obj.ramadanNo}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default function TableDemo() {
  const currentDate = new Date()

  return (
    <WrapperDiv className='min-w-fit w-3/4'>
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