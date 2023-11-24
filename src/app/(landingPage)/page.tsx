import { getCurrentUser } from "@/lib/session"
import Hero from "./components/hero"
import Categories from "./components/categories"
export default async function Home() {
  const user = await getCurrentUser()
  return (
    <main className=" w-screen h-full flex flex-col justify-center items-center">
      <Hero/>
      <Categories/>
    </main>
  )
}
