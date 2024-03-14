"use client";
import LongDate from "@/components/CurrentDate";
import Card from "./main";
import SeharIftar from "@/components/SeharIftar";
import { getByDate, getObjectByRamadanNo, ramadanDateObj } from '@/data/radmadanDates';
import Footer from "./footer";
import { useEffect } from "react";
import { notFound } from "next/navigation";

async function generateStaticParams() {
  const slugs = Array.from({length: 30}, (_, i) => (String(i+1)));
  slugs.push("Now")
  return slugs.map((rNo) => ({
    ramadan: rNo,
  }))
}

const Page: React.FC<{params:{ramadan:string}}> = (prop) => {
  
  const currentDate = new Date()
  const tomorrow = new Date(currentDate)
  tomorrow.setDate(currentDate.getDate()+1)

  if (prop.params.ramadan !== "Now"){
    let ramadanNo = parseInt(prop.params.ramadan);
    if (ramadanNo > 0 && ramadanNo < 31){
      let currentRamadan = getObjectByRamadanNo(ramadanNo)!
      currentDate.setFullYear(
        currentRamadan.seharDate.getFullYear(),
        currentRamadan.seharDate.getMonth(),
        currentRamadan.seharDate.getDate()
        )
      tomorrow.setFullYear(2050)
    } else {
      notFound()
    }
  }
  const currentRamadan = getByDate(currentDate)

  const tomorrowRamadan = getByDate(tomorrow)
  console.log(currentDate, tomorrow)
  
  if (!currentRamadan){
    console.log("CurrentDate:", currentDate)
    console.log("RamadanDate:", currentRamadan)
    return <div className="text-destructive">InValid Ramadan Date</div>
  }

  return (
    <>
    <Card 
      todayDate={currentDate}
      forSpecificDay={prop.params.ramadan !== "Now"}
      currentRamadan={currentRamadan}
      tomorrowDate={tomorrow}
      tomorrowRamadan={tomorrowRamadan}
      
      currentDateComp={<LongDate date={currentDate} currentRamadan={currentRamadan}/>}
      // currentRamadanComp={<div>Current Ramadan: &quot;{currentRamadan.ramadanNo}&quot;</div>}
      SeharIftarComp={<SeharIftar ramadan={currentRamadan}/>}
      CardFooter={<Footer/>}
     />
     </>
  );
};

export default Page;