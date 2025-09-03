import Link from 'next/link'
import {notFound} from "next/navigation"
export const runtime = "edge";
export default function NotFoundCatchAll() {
  notFound()
  return null
}