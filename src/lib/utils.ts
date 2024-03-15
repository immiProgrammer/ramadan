import { type ClassValue, clsx } from "clsx"
import { isSameDay, isSameMonth, isSameYear } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function zfill(str: string | number, fill: number = 2, withChar: string = "0"): string {
  return String(str).padStart(fill, withChar);
}

export function isDatesEqual(date1:Date, date2:Date) {
  const sameDay = isSameDay(date1, date2);
  const sameMonth = isSameMonth(date1, date2);
  const sameYear = isSameYear(date1, date2);

  return sameDay && sameMonth && sameYear;
}