import { ramadanDateObj } from '@/data/radmadanDates'
import { zfill } from '@/lib/utils'
import { formatDate } from 'date-fns'
import { Link } from '@lexz451/next-nprogress';
import React from 'react'

export default function LongDate({date, currentRamadan}:{date:Date, currentRamadan:ramadanDateObj}) {
  return (
    <div>
    <div>
        {formatDate(date, 'EEEE, MMMM dd')}
    </div>
    <div className='gradient-text'>
        <Link href={`/${currentRamadan.ramadanNo}`}><span className='font-bold'>{"Ramadan"}</span>, <span className='font-bold scale-150' style={{fontSize: "1.5em"}}>{zfill(currentRamadan.ramadanNo)}</span> {"1445"}</Link>
    </div>
    </div>
  )
}
