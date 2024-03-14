import { ramadanDates } from "@/data/radmadanDates";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
