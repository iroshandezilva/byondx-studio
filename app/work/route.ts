import { redirect } from "next/navigation"

const WORK_URL = "https://www.figma.com/proto/bDUWKchEO6LELUUrQNs4BL/Byondx-Studio---Slide-deck?node-id=32-15556&viewport=-446%2C1306%2C0.08&t=F6RLCg1uNkkwGLgo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=32%3A15556&page-id=0%3A1"

export function GET() {
  redirect(WORK_URL)
}
