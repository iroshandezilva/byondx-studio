import { redirect } from "next/navigation"

const WORK_URL = "https://figma.com"

export function GET() {
  redirect(WORK_URL)
}
