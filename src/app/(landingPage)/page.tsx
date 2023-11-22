import { getCurrentUser } from "@/lib/session"
import Hero from "./components/hero"
export default async function Home() {
  const user = await getCurrentUser()
  return (
    <main>
      <Hero/>
    </main>
  )
}
