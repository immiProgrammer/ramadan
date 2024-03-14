import { ramadanDateObj } from '@/data/radmadanDates'
import { zfill } from '@/lib/utils'
import { formatDate } from 'date-fns'
import Link from 'next/link'
import React from 'react'

export default function LongDate({date, currentRamadan}:{date:Date, currentRamadan:ramadanDateObj}) {
  return (
    <div>
    <div className='text-gradient-c1'>
        {formatDate(date, 'EEEE')}, {formatDate(date, 'MMMM')} {formatDate(date, 'dd')}
    </div>
    <div className='gradient-text'>
        <Link href={`/${currentRamadan.ramadanNo}`}><span className='font-bold'>{"Ramadan"}</span>, <span className='font-bold scale-150' style={{fontSize: "1.5em"}}>{zfill(currentRamadan.ramadanNo)}</span> {"1445"}</Link>
    </div>
    </div>
  )
}
