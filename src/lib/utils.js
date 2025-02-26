/**
 * Combines multiple class names into a single string
 * This utility is used by shadcn/ui components
 */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}