import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function zfill(str: string | number, fill: number = 2, withChar: string = "0"): string {
  return String(str).padStart(fill, withChar);
}