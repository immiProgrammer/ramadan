"use client";
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import FlipNumbers from 'react-flip-numbers';
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import HHMMSS from '../../components/HHMMSS';
import TimeLabel from '../../components/TimeLabel';
import { formatDate, getHours, isSameDay, isSameMonth, isSameYear } from 'date-fns';
import SeharIftar from '../../components/SeharIftar';
import LongDate from '../../components/CurrentDate';
import { getByDate, ramadanDateObj } from '@/data/radmadanDates';
import { HHMM } from '../../components/TimeLabel';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function isDatesEqual(date1:Date, date2:Date) {
  const sameDay = isSameDay(date1, date2);
  const sameMonth = isSameMonth(date1, date2);
  const sameYear = isSameYear(date1, date2);

  return sameDay && sameMonth && sameYear;
}

function getTimeDifference(newDate:Date, oldDate:Date) {
    // Calculate the difference in milliseconds
    var timeDifference = newDate.getTime() - oldDate.getTime();

    // Convert milliseconds to hours, minutes, and seconds
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function TimeComponent() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
  <div className='h-full w-full flex justify-between'>
    <div>Current Time: {time}</div>
    <div className='text-4xl'>
    <FlipNumbers height={20} width={50} color="white" background="black" play perspective={100} numbers={time} numberStyle={{backgroundColor: "red"}} />;
  </div></div>
  );
}

type PageProps = {
    todayDate:Date;
    currentRamadan:ramadanDateObj;
    tomorrowDate:Date;
    tomorrowRamadan:ramadanDateObj|undefined;
    currentDateComp: React.ReactNode;
    forSpecificDay:boolean;
    // currentRamadanComp: React.ReactNode;
    SeharIftarComp: React.ReactNode;
    CardFooter: React.ReactNode;
}

enum RamadanTime {
  Sehar = "Sehar",
  Iftar = "Iftar",
  tomorrowSehar = "Tomorrow Sehar" // when iftar time is over
}

export const Card: React.FC<PageProps> = ({
                            todayDate, currentRamadan,
                            tomorrowDate, tomorrowRamadan,
                            currentDateComp, SeharIftarComp, CardFooter, forSpecificDay=false}) => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [Error, setError] = useState(false);
  const [DifferenceOf, setDifferenceOf] = useState<RamadanTime>(RamadanTime.Iftar);
  const interval = useRef<NodeJS.Timeout>()

  const getDifferenceTimeOfDate = useCallback(() => {
    switch (DifferenceOf) {
      case RamadanTime.Iftar:
        return currentRamadan.iftarDate;
      case RamadanTime.Sehar:
        return currentRamadan.seharDate;
      case RamadanTime.tomorrowSehar:
        return tomorrowRamadan?.seharDate;
    }
  }, [DifferenceOf, currentRamadan, tomorrowRamadan])
  const DiffDetailsComp = useMemo(() => (
    <p 
    className='text-wrap text-sm text-[#feca7f]'>
      Remaining until <br className='hidden sm:block' /><Link className='font-bold' href={`/${(DifferenceOf!==RamadanTime.tomorrowSehar?currentRamadan.ramadanNo:tomorrowRamadan?.ramadanNo)}`}>&quot;<span className='underline'>{DifferenceOf}</span>&quot;</Link> time. &quot;{formatDate(getDifferenceTimeOfDate()!, "hh")}:{formatDate(getDifferenceTimeOfDate()!, "mm")}&quot;
    </p>), [DifferenceOf, getDifferenceTimeOfDate, currentRamadan, tomorrowRamadan?.ramadanNo])

  //   const ramadanDates = useMemo(()=> getByDate(currentTime), [currentTime.getDate()])
  let timeDiff = {
    hours: 0,
    minutes: 0,
    seconds: 0
    };

  // let timeDiff = getTimeDifference(new Date('2024-03-12T18:09:00'), currentTime)

  useEffect(() => {
    if (!isDatesEqual(currentTime, todayDate) && !forSpecificDay){
      setError(true)
    }
  }, [currentTime, forSpecificDay, todayDate]);

  useEffect(() => {
    if (!forSpecificDay){
      interval.current = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => {
        clearInterval(interval.current);
      };
    } else {
      setCurrentTime(todayDate)
    }

  }, [forSpecificDay, todayDate]);

  if (Error){
    console.log("ServerDate", todayDate, "ClientDate", currentTime)
    clearInterval(interval.current);
    return <div>Date is not Correct &quot;clg&quot;</div>
  }

  if (DifferenceOf === RamadanTime.Iftar){
    if (currentTime > currentRamadan.iftarDate){
      setDifferenceOf(RamadanTime.tomorrowSehar)
    }
    timeDiff = getTimeDifference(currentRamadan.iftarDate, currentTime)
    
  } else if (DifferenceOf === RamadanTime.Sehar) {
    if (currentTime > currentRamadan.seharDate){
      setDifferenceOf(RamadanTime.Sehar)
    }
    timeDiff = getTimeDifference(currentRamadan.seharDate, currentTime)

  } else if (DifferenceOf === RamadanTime.tomorrowSehar) {
      if (typeof tomorrowRamadan === 'undefined'){
        return <div>&quot;Happy Eid Mubarak&quot;</div>
      }

      if (isDatesEqual(currentTime, tomorrowDate)){
        window.location.reload()
        console.log(currentTime, todayDate, tomorrowDate)
        // console.log(isDatesEqual(currentTime, tomorrowDate))
        return <div>Loading...</div>
      }

    timeDiff = getTimeDifference(tomorrowRamadan.seharDate, currentTime)
  }

  console.log({
    todayDate, currentRamadan,
    tomorrowDate, tomorrowRamadan,
    currentTime, timeDiff
  })
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <div className={cn('flex flex-col-reverse sm:flex-row items-center gap-2 w-full', forSpecificDay?"justify-center text-center":"justify-between")}>
        {currentDateComp}
        {!forSpecificDay && <div className=''>
          <p className="text-xs text-gradient-c1">Current Time:</p>
          <HHMMSS size={16}
          className='px-2 py-1 h-fit text-gradient-c1'
          h={currentTime.getHours()} m={currentTime.getMinutes()} s={currentTime.getSeconds()}/>
        </div>}
      </div>
      {SeharIftarComp}
      {!forSpecificDay && <div className='flex flex-col sm:flex-row gap-2 items-center'>
        <HHMMSS size={20}
         className='px-3 py-2 text-gradient-c1'
         h={timeDiff.hours} m={timeDiff.minutes} s={timeDiff.seconds}/>
        
        {/* {<p 
          className='text-wrap text-sm text-foreground/90'>
            Remaining until <br /><span>&quot;{DifferenceOf}&quot;</span> time. &quot;{formatDate(getDifferenceTimeOfDate()!, "hh")}:{formatDate(getDifferenceTimeOfDate()!, "mm")}&quot;
        </p>} */}
        {DiffDetailsComp}
      </div>}
    {CardFooter}
    </div>
  );
};

export default Card;