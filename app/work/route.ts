import { redirect } from "next/navigation"

const WORK_URL = "https://www.figma.com/design/9G3l5HjZMGj4LfXVZZZTvq/Website"

export function GET() {
  redirect(WORK_URL)
}
