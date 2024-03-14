import React from 'react'
import TimeLabel from './TimeLabel'
import { Time2n } from './TimeLabel';
import { formatDate } from 'date-fns';
import { ramadanDateObj } from '@/data/radmadanDates';

export default function SeharIftar({ramadan}:{ ramadan:ramadanDateObj }) {
  return (
    <div className='flex justify-between w-full'>
      <TimeLabel label='Sehar' date={ramadan.seharDate} align='left'/>
      <TimeLabel label='Iftar' date={ramadan.iftarDate} />
  </div>
  )
}
