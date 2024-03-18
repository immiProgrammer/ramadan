"use client";
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Link } from '@lexz451/next-nprogress';
import HHMMSS from '@/components/HHMMSS';
import { formatDate } from 'date-fns';
import { ramadanDateObj } from '@/data/radmadanDates';
import { cn, isDatesEqual } from '@/lib/utils';
import "react-awesome-animated-number/dist/index.css";


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

type PageProps = {
    todayDate:Date;
    currentRamadan:ramadanDateObj;
    tomorrowDate:Date;
    tomorrowRamadan:ramadanDateObj|undefined;
    currentDateComp: React.ReactNode;
    forSpecificDay:boolean;
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
    className='text-wrap text-sm text-card-foreground'>
      Remaining until <br className='hidden sm:block' /><Link className='font-bold hover:underline' href={`/${(DifferenceOf!==RamadanTime.tomorrowSehar?currentRamadan.ramadanNo:tomorrowRamadan?.ramadanNo)}`}>&quot;<span className='underline'>{DifferenceOf}</span>&quot;</Link> time.
      &quot;<Link className='hover:underline' href={`/${(DifferenceOf!==RamadanTime.tomorrowSehar?currentRamadan.ramadanNo:tomorrowRamadan?.ramadanNo)}`}>{formatDate(getDifferenceTimeOfDate()!, "hh:mm")}</Link>&quot;
    </p>), [DifferenceOf, getDifferenceTimeOfDate, currentRamadan, tomorrowRamadan?.ramadanNo])

  let timeDiff = {
    hours: 0,
    minutes: 0,
    seconds: 0
    };

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

  
  if (DifferenceOf === RamadanTime.Sehar) {
    if (currentTime > currentRamadan.seharDate){
      setDifferenceOf(RamadanTime.Iftar)
  }
    timeDiff = getTimeDifference(currentRamadan.seharDate, currentTime)

  }else if (DifferenceOf === RamadanTime.Iftar){
    if (currentTime > currentRamadan.iftarDate){
      setDifferenceOf(RamadanTime.tomorrowSehar)
    }
    timeDiff = getTimeDifference(currentRamadan.iftarDate, currentTime)

  } else if (DifferenceOf === RamadanTime.tomorrowSehar) {
      if (typeof tomorrowRamadan === 'undefined'){
        return <div>&quot;Happy Eid Mubarak&quot;</div>
      }

      if (isDatesEqual(currentTime, tomorrowDate)){
        window.location.reload()
        console.log(currentTime, todayDate, tomorrowDate)
        return <div>Loading...</div>
      }

    timeDiff = getTimeDifference(tomorrowRamadan.seharDate, currentTime)
  }

  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <div className={cn('flex flex-col-reverse sm:flex-row items-center gap-2 w-full', forSpecificDay?"justify-center text-center":"justify-between")}>
        {currentDateComp}
        {!forSpecificDay && <div className=''>
          <p className="text-xs text-card-foreground">Current Time:</p>
          <HHMMSS size={16}
          className='px-2 py-1 h-fit text-card-foreground'
          h={parseInt(formatDate(currentTime, 'hh'))} m={currentTime.getMinutes()} s={currentTime.getSeconds()}/>
        </div>}
      </div>
      {SeharIftarComp}
      {!forSpecificDay && <div className='flex flex-col sm:flex-row gap-2 items-center'>
        <HHMMSS size={20}
         className='px-3 py-2 text-card-foreground'
         h={timeDiff.hours} m={timeDiff.minutes} s={timeDiff.seconds}/>

        {DiffDetailsComp}
      </div>}
    {CardFooter}
    </div>
  );
};

export default Card;